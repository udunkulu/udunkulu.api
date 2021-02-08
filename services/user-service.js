const Joi = require('joi');
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser, validateUpdate } = require('../models/user');
const mailService = require('./mail-service');
const { NODE_ENV } = require('../config/env');

/**
 * validated an email address
 */
exports.validateEmail = async (email) => {
  // email schema
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase()
      .required()
  });

  const value = await schema.validateAsync(email);

  return value;
};

exports.createUser = async (req, res) => {
  // validate req.body
  const validData = await validateUser(_.omit(req.body, ['stageName']));

  let user = await User.findOne({ email: validData.email });
  if (user) return res.status(409).send({ status: false, message: 'user already exist' });

  user = new User({ ...validData });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);


  // In local? You need to connect to internet for this to work and set NODE_ENV=production
  // if (NODE_ENV === 'production') {
  //   await mailService.sendVerificationMail(user, token);
  // }

  // if (NODE_ENV === 'development') {
  //   user.verifiedAt = new Date();
  // }

  user.verifiedAt = new Date();

  await user.save();

  return user;
};
