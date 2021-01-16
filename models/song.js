const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { SECRET } = require('../config/env');

// Define song schema
const songSchema = new mongoose.Schema({

  title: {
    type: String, 
    required: true,
    minlength: 3,
    maxlength: 100
  },

  duration: {
    type: Number,
    trim: true,
    lowercase: true,
    required: true
  },

  album: {
    type: String,
    minlength: 3,
    maxlength: 60
  },

  songCover: {
    type: Image,
    minwidth: 400 px,
    maxwidth: 800 px,
    maxheight: 200 px,
    minheight: 500 px,
    required: true
  },
  releaseDate: {
    type: Date,
  }
},


// Tells which song properties that are included when converting MongoDB records to
// JSON objects which are returned in API responses
userSchema.set('toJSON', {
  versionKey: false,
  transform(doc, ret) {
    // eslint-disable-next-line no-param-reassign
    delete ret.password;
  }
});

// Define song model based on song schema
const song = mongoose.model('song', songSchema);

// validation
const validatesong = async (song = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    songCover: Joi.Image().min(200).max(800).required(),
    album: Joi.string().min(6).max(60).required(),
    email: Joi.string().email().trim().lowercase()
      .required()
  });
  
  const value = await schema.validateAsync(song);

  return value;
};


exports.validatesong = validatesong;
exports.song = song;
exports.validateUpdate = validateUpdate;
