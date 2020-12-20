/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config/env');
const { User } = require('../../models/User');
const { validateEmail, sendResetPasswordMail } = require('../../services/UserService');

/**
 * Verifies if email is correct, through verifying a token
 * This suppose to render html, that uses fetch or
 * axios api to make a request
 */
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  const decoded = jwt.verify(token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send({ status: false, message: 'user not found' });
  if (user.verifiedAt) return res.status(200).send({ status: false, message: 'user already verified' });

  user.verifiedAt = new Date();

  await user.save();

  return res.header('token', token).send({
    status: true, message: 'email verified', data: user
  });
};

/**
 * Handles the api-request when a user forgot his/her password
 */
exports.forgotPassword = async (req, res) => {
  const { email } = await validateEmail({ email: req.body.email });

  // verify user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({
      status: false, message: 'user with this email does not exist'
    });
  }

  // send reset password mail
  await sendResetPasswordMail(user);

  return res.status(200).send({
    status: true,
    message: 'The link to reset your password has been sent to the provided mail'
  });
};

/**
 * exports.passwordResetForm = async (req, res) => {
  render('reset-password') or redirect to front-end form that does;
};
 * Not implemented yet: This should render a form for user
 * to enter their new password. This form submits to resetPassword() handler via json
 */

exports.resetPassword = async (req, res) => {
  const { token } = req.query;

  const decoded = jwt.verify(token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send({ status: false, message: 'user not found' });

  return res.status(200).send({ status: true, message: 'user can reset password' })
};
