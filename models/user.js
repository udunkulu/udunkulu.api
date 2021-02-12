const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { SECRET } = require('../config/env');
const { ac } = require('../config/roles');

// Define user schema
const userSchema = new mongoose.Schema({

  firstName: {
    type: String, required: true, minlength: 3, maxlength: 100
  },

  lastName: {
    type: String, required: true, minlength: 3, maxlength: 100
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true
  },

  phoneNumber: {
    type: String,
    minlength: 5,
    unique: false
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 60
  },

  role: {
    type: String,
    lowercase: true,
    enum: ['listener', 'admin', 'artist'],
    default: 'listener',
    required: true
  },

  verifiedAt: {
    type: Date
  }

}, { timestamps: true });

// Define static method to be used on User object
userSchema.methods.generateAuthToken = function t() { // t is short for token
  const token = jwt.sign({
    _id: this._id,
    email: this.email,
    role: this.role
  }, SECRET, { expiresIn: '7 days' });

  return token;
};

// Tells which user properties that are included when converting MongoDB records to
// JSON objects which are returned in API responses
userSchema.set('toJSON', {
  versionKey: false,
  transform(doc, ret) {
    // eslint-disable-next-line no-param-reassign
    delete ret.password;
  }
});

userSchema.index({ firstName: 'text', lastName: 'text' })

// Define User model based on user schema
const User = mongoose.model('User', userSchema);

// authorisations
const authorisation = () => {
  ac.grant('listener')
    .readAny('userAccount')
    .updateOwn('userAccount');

  ac.grant('artist').extend('listener');

  ac.grant('admin').extend('artist')
    .createAny('userAccount')
    .updateAny('userAccount')
    .deleteAny('userAccount');
};
authorisation();

// validation
const validateUser = async (user = {}) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(6).max(60).required(),
    email: Joi.string().email().trim().lowercase()
      .required(),
    phoneNumber: Joi.string(),
    role: Joi.string().lowercase()
  });

  const value = await schema.validateAsync(user);

  return value;
};

// validation
const validateUpdate = async (user = {}) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(100),
    lastName: Joi.string().min(3).max(100),
    password: Joi.string().min(6).max(60),
    email: Joi.string().email().trim().lowercase(),
    phoneNumber: Joi.string(),
    role: Joi.string().lowercase()
  });

  const value = await schema.validateAsync(user);

  return value;
};

module.exports = {
  validateUser,
  User,
  validateUpdate
};
