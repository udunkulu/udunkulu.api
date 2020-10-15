/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser, validateUpdate } = require('../models/User');

/**
 * Retrieve a user
 */
exports.detail = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send({ status: 'error', message: 'No user found' });
  res.status(200).send({ status: 'success', data: user });
};

/**
 * List/Fetch all users
 */
exports.list = async (req, res) => {
  const users = await User.find();
  
  if (!users) return res.status(404).send({ status: 'error', message: 'User not found' });

  res.status(200).send({ status: 'success', data: users });
};

/**
 * Create a user
 */
exports.create = async (req, res) => {
  // validate req.body
  const validData = await validateUser(req.body);

  let user = await User.findOne({ email: validData.email });
  if (user) return res.status(404).send({ status: 'error', message: 'User already exist' });

  user = new User({ ...validData });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  return res.header('token', token).status(201).send({
    status: 'success',
    data: user
  });
};

/**
 * Update a user
 */
exports.update = async (req, res) => {
  // validate req.body ... to be done later
  // on update empty field updated
  let requestBody = await validateUpdate(req.body);

  // remove password and role from req.body
  requestBody = _.omit(req.body, ['password', 'role']);

  const options = { new: true, runValidators: true };
  await User.findByIdAndUpdate(req.params.id, {
    ...requestBody
  }, options, async (error, user) => {
    if (error) throw error;
    if (!user) return res.status(404).send({ status: 'error', message: 'User not found' });

    res.status(200).send({ status: 'success', data: user });
  });
};

/**
 * Delete a user
 */
exports.delete = async (req, res) => {
  // validate,
  // only a user will can delete itself, admin can also delete
  // if (req.user._id !== req.params.id) return res.status(400).send('Bad request');

  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send({ status: 'error', message: 'User not found' });

  res.status(200).send({ status: 'success', data: user });
};

/**
 * Login a user
 */
exports.login = async (req, res) => {
  // check if user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ status: 'error', message: 'Invalid email  or password' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send({ status: 'error', message: 'Invalid password or email' });

  const token = user.generateAuthToken();

  res.header('token', token).status(200).send({
    status: 'success',
    data: user
  });
};
