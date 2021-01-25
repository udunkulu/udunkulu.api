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

  address: {
    type: String,
    trim: true
  },

  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },

  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },

  // path to the song's image
  coverArt: {
    type: String,
    trim: true,
    minlength: 2
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

songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  music: {
    type: Object,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

// Determine which properties are returned in API responses
songSchema.set('toJSON', {
  versionKey: false
  // transform(doc, ret) {}
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

module.exports = {
  Song
};
