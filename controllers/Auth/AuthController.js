/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config/env');
const { User } = require('../../models/User');

/**
 * Verifies if email is correct, through verifying a token
 */
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  const decoded = jwt.verify(token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send({ status: false, message: 'user found' });

  if (user.verifiedAt) return res.status(200).send({ status: false, message: 'user already verified' });

  user.verifiedAt = new Date();

  return res.header('token', token).send({
    status: true, message: 'email verified', data: user
  });
};
