const mongoose = require('mongoose');
const Joi = require('joi');
const { ac } = require('../config/roles');

// Define song schema
let songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },

  // artist: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Artist'
  // },

  // album: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Album'
  // },

  // path to the song's image
  coverArt: {
    type: String,
    trim: true,
    minlength: 2
  },

  // The length a song can play until it stops (seconds)
  duration: {
    type: Number
  },

  url: {
    type: String
  },

  // keeps details about this files' info on where it was stored
  // in the cloud...This is not going to be sent in the API response
  cloudinary: {
    type: Object,
    required: true
  },

  // must not be filled during creation
  // keeps number of times a was played
  streams: {
    type: Number,
    required: true,
    default: 0
  }

  // genre: {  }

  // mood: {  }

}, { timestamps: new Date() });

// songSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   music: {
//     type: Object,
//     required: true
//   },
//   artist: {
//     type: String,
//     required: true
//   },
//   created: {
//     type: Date,
//     default: Date.now()
//   }
// });

// Determine which properties are returned in API responses
songSchema.set('toJSON', {
  versionKey: false,
  transform(doc, ret) {
    // eslint-disable-next-line no-param-reassign
    delete ret.cloudinary;
  }
});

// Define Song model based on song schema | map song schema to database
const Song = mongoose.model('Song', songSchema);

// authorisations
const authorisations = () => {
  ac.grant('listener')
    .readAny('song');

  ac.grant('artist').extend('listener')
    .createOwn('song')
    .updateOwn('song')
    .deleteOwn('song');

  ac.grant('admin').extend('listener')
    // .createAny('song') // in the future we may allow this
    .updateAny('song')
    .deleteAny('song');
};
authorisations();

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

module.exports = {
  Song, validateSong, validateUpdate
};
