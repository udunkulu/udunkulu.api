const mongoose = require('mongoose');
const Joi = require('joi');

// Define song schema
const songSchema = new mongoose.Schema({

  title: {
    type: String, required: true, minlength: 3, maxlength: 100
  },

  album: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 60
  },

  duration: {
    type: Number,
    required: true
  },
  musidId: {
    type: Number,
    required: true
  },

  releaseDate: {
    type: Date
  }

}, { timestamps: new Date() });

// Tells which song properties that are included when converting MongoDB records to
// JSON objects which are returned in API responses
songSchema.set('toJSON', {});

// Define Song model based on song schema
const Song = mongoose.model('Song', songSchema);

// validation
const validateSong = async (song = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required()

  });

  const value = await schema.validateAsync(song);

  return value;
};

// validation
const validateUpdate = async (song = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100)
  });

  const value = await schema.validateAsync(song);

  return value;
};

exports.validateSong = validateSong;
exports.Song = Song;
exports.validateUpdate = validateUpdate;
