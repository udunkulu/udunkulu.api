/* eslint-disable no-underscore-dangle */
// const bcrypt = require('bcrypt');
const _ = require('lodash');
const ArtistController = require('./artist-controller');
const { User, validateUser, validateUpdate } = require('../models/user');
// const mailService = require('../services/mail-service');
// const { NODE_ENV } = require('../config/env');
const UserService = require('../services/user-service');

/**
 * Retrieve a user
 */
exports.detail = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send({ success: false, message: 'user not found' });
  res.status(200).send({ success: true, message: 'success', data: user });
};

/**
 * List/Fetch all users
 */
exports.list = async (req, res) => {
  const users = await User.find();
  if (_.isEmpty(users)) return res.status(404).send({ success: false, message: 'users not found' });

  res.status(200).send({ success: true, message: 'success', data: users });
};

/**
 * Create a user
 */
exports.create = async (req, res) => {
  // if it is an artist, go here
  if (req.body.role === 'artist') {
    return ArtistController.create(req, res);
  }

  // validate req.body
  const validData = await validateUser(_.omit(req.body, ['stageName', 'role']));

  let user = await User.findOne({ email: validData.email });
  if (user) return res.status(409).send({ success: false, message: 'user already exist' });

  user = await UserService.createUser(req, res);

  // log the user in
  const token = user.generateAuthToken();

  return res.header('token', token).status(201).send({
    success: true, message: 'success', data: { user, token }
  });
};

/**
 * Update a user
 */
exports.update = async (req, res) => {
  let requestBody = await validateUpdate(req.body);

  // is Owner : check if it is the artist
  const isSelf = await User.findOne({
    _id: req.params.id
  });
  if (isSelf._id !== req.user._id) {
    return res.status(401).send({
      success: false,
      message: 'Permission denied or user does not exist'
    });
  }
  // remove password and role from req.body
  requestBody = _.omit(req.body, ['password', 'role']);

  const options = { new: true, runValidators: true };
  await User.findByIdAndUpdate(req.params.id, {
    ...requestBody
  }, options, async (error, user) => {
    if (error) throw error;
    if (!user) return res.status(404).send({ success: false, message: 'user not found' });

    res.status(200).send({ success: true, message: 'success', data: user });
  });
};

/**
 * Delete a user
 */
exports.delete = async (req, res) => {
  // validate,
  // only a user will can delete itself, admin can also delete
  // if (req.user._id !== req.params.id) return res.status(400).send('Bad request');

   // is Owner : check if it is the artist
   const isSelf = await User.findOne({
    _id: req.params.id
  });
  if (isSelf._id !== req.user._id) {
    return res.status(401).send({
      success: false,
      message: 'Permission denied or user does not exist'
    });
  }
  
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send({ success: false, message: 'user not found' });

  res.status(200).send({ success: true, message: 'success', data: user });
};
