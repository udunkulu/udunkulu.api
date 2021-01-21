const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { SECRET } = require('../config/env');

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
    type: Number,
    required: true,
    unique: true,
    maxlength: 11,
  }

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

}, { timestamps: new Date() });

// Define static method to be used on User object
userSchema.methods.generateAuthToken = function t() {
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

// Define User model based on user schema
const User = mongoose.model('User', userSchema);

// validation
const validateUser = async (user = {}) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(6).max(60).required(),
    email: Joi.string().email().trim().lowercase()
      .required()
    phoneNumber: Joi.number(),
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
    email: Joi.string().email().trim().lowercase()
  });

  const value = await schema.validateAsync(user);

  return value;
};

exports.validateUser = validateUser;
exports.User = User;
exports.validateUpdate = validateUpdate;
