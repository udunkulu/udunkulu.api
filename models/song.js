const mongoose = require('mongoose');
const Joi = require('joi');

// Define song schema
const songSchema = new mongoose.Schema({
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

// Determine which properties are returned in API responses
songSchema.set('toJSON', {
  versionKey: false
  // transform(doc, ret) {}
});

// Define Song model based on song schema | map song schema to database
const Song = mongoose.model('Song', songSchema);

module.exports = {
  Song
};
