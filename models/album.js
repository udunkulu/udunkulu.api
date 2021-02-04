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
    type: String,
    minlength: 10,
    maxlength: 250
  },
  coverArt: {
    type: String
  },
  featuring: {
    type: String
  },
  cloudinary: {
    type: Object,
    required: true
  },
  released: {
    type: Date
    // required: true, // in the future this will be require
    // default: new Date()
  }

}, { timestamps: new Date() });

albumSchema.index({ title: 'text' });

// Defines Album model based on album schema
const Album = mongoose.model('Album', albumSchema);

// Define what is return in API response
albumSchema.set('toJSON', {
  versionKey: false,
  transform(doc, ret) {
    // eslint-disable-next-line no-param-reassign
    delete ret.cloudinary;
  }
});

// validation
const validateAlbum = async (album = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(250),
    featuring: Joi.string(),
    released: Joi.date()
  });

  const value = await schema.validateAsync(album);

  return value;
};

// validation
const validateUpdate = async (album = {}) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50),
    description: Joi.string().min(10).max(250),
    featuring: Joi.string(),
    released: Joi.date()
  });

  const value = await schema.validateAsync(album);

  return value;
};

exports.validateAlbum = validateAlbum;
exports.Album = Album;
exports.validateUpdate = validateUpdate;
