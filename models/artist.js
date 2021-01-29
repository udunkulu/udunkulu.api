const mongoose = require('mongoose');
const Joi = require('joi');

// Define artist schema
const artistSchema = new mongoose.Schema({
  stageName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: new Date() });

// No static method to be used on object

// define artist model based on artist schema
const Artist = mongoose.model('Artist', artistSchema);

// Define what is return in API response
artistSchema.set('toJSON', {
  versionKey: false
  // transform(doc, ret) {}
});

// validation for creating artist
const validateArtist = async (artist = {}) => {
  const schema = Joi.object({
    stageName: Joi.string().min(2).max(50).required()
    // user: Joi.string.min(10)
  });

  const value = await schema.validateAsync(artist);

  return value;
};

// Validation for updating artist
const validateUpdate = async (artist = {}) => {
  const schema = Joi.object({
    stageName: Joi.string().min(2).max(50)
    // user: Joi.string.min(10)
  });

  const value = await schema.validateAsync(artist);
  return value;
};

module.exports = {
  validateArtist,
  validateUpdate,
  Artist
};
