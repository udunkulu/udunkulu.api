const mongoose = require('mongoose');
const Joi = require('joi');
const { ac } = require('../config/roles');

// Define artist schema
const artistSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: new Date() }
);

artistSchema.index({ stageName: 'text' });

// No static method to be used on object

// define artist model based on artist schema
const Artist = mongoose.model('Artist', artistSchema);

// Define what is return in API response
artistSchema.set('toJSON', {
  versionKey: false
  // transform(doc, ret) {}
});

// Return all songs related to an artist
artistSchema.virtual('songs', {
  ref: 'Song',
  localField: '_id',
  foreignField: 'artist',
  justOne: false
});

// authorisations on artist resource
const authorisations = () => {
  ac.grant('listener').readAny('artist');

  ac.grant('artist').extend('listener')
    .createOwn('artist')
    .updateOwn('artist')
    .deleteOwn('artist');

  ac.grant('admin')
    .extend('listener')
    // .createAny('artist') // in the future we may allow this
    .updateAny('artist')
    .deleteAny('artist');
};
authorisations();

// is onwer
const isOwner = async (req, res) => {

};

// validation for creating artist
const validateArtist = async (artist = {}) => {
  const schema = Joi.object({
    stageName: Joi.string().min(2).max(50).required(),
    role: Joi.string().required().min(6).max(6)
      .lowercase()
      .trim()
    // user: Joi.string.min(10)
  });

  const value = await schema.validateAsync(artist);

  return value;
};

// Validation for updating artist
const validateUpdate = async (artist = {}) => {
  const schema = Joi.object({
    stageName: Joi.string().min(2).max(50)
  });

  const value = await schema.validateAsync(artist);
  return value;
};

/**
 * @description During update: validte an artit's detail together with its user details
 * @param {object} data containing artist and user info
 * @returns {object} value - containing the validated data
 */
const validateArtistHavingUserDetail = async (data = {}) => {
  const schema = Joi.object({
    stageName: Joi.string().min(2).max(50),
    firstName: Joi.string().min(3).max(100),
    lastName: Joi.string().min(3).max(100),
    password: Joi.string().min(6).max(60),
    phoneNumber: Joi.string()
  });

  const value = await schema.validateAsync(data);
  return value;
};

module.exports = {
  validateArtist,
  validateUpdate,
  Artist,
  validateArtistHavingUserDetail,
  isOwner
};
