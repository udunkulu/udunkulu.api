/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const { Artist, validateArtist, validateUpdate } = require('../models/artist');
const UserService = require('../services/user-service');

exports.create = async (req, res) => {
  // make a user
  const user = await UserService.createUser(req, res);

  if (!user.role === 'artist') {
    return res.status(401).send({
      success: false,
      message: `wrong user role, expected role to be artist, got ${user.role}`
    });
  }

  const validData = await validateArtist(_.pick(req.body, ['stageName']));

  const artist = new Artist({
    ...validData,
    user: user._id
  });

  await artist.save();

  const artistWithUser = await Artist
    .findById(artist._id)
    .populate('user');

  res.status(201).send({
    success: true,
    message: 'created',
    data: artistWithUser
  });
};

/**
 * List/Fetch all artists
 */
exports.list = async (req, res) => {
  const artists = await Artist.find();
  if (_.isEmpty(artists)) return res.status(404).send({ success: false, message: 'artists not found' });

  res.status(200).send({ success: true, message: 'success: list of artists', data: artists });
};

/**
 * Retrieve an artist
 */
exports.detail = async (req, res) => {
  const artist = await Artist.findById(req.params.id).populate('user');
  if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });
  res.status(200).send({ success: true, message: 'success', data: artist });
};

exports.update = async (req, res) => {
  const validBody = await validateUpdate(_.omit(req.body, ['user']));

  const options = { new: true, runValidators: true };
  await Artist.findByIdAndUpdate(req.params.id, {
    ...validBody
  }, options, async (error, artist) => {
    if (error) throw error;
    if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });

    res.status(200).send({ success: true, message: 'update was success', data: artist });
  });
};

exports.delete = async (req, res) => {
  // we may want to remove this artist's resources
};
