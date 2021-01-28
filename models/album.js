const mongoose = require('mongoose');
const Joi = require('joi');

const albumSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  description: {
    type: String
  }

}, { timestamps: new Date() });

// Defines Album model based on album schema
const Album = mongoose.model('Album', albumSchema);

// validation
const validateAlbum = async (album = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(250).required()
  });

  const value = await schema.validateAsync(album);

  return value;
};

// validation
const validateUpdate = async (album = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(250)
  });

  const value = await schema.validateAsync(album);

  return value;
};

exports.validateAlbum = validateAlbum;
exports.Album = Album;
exports.validateUpdate = validateUpdate;
