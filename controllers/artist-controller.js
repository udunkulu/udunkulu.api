/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const { Artist, validateArtist } = require('../models/artist');

exports.create = async (req, res) => {
  const validData = await validateArtist(req.body);

  const artist = new Artist({
    ...validData,
    user: req.user._id
  });

  await artist.save();

  res.status(201).send({
    success: true,
    message: 'registered success',
    data: artist
  });
};

/**
 * List/Fetch all artists
 */
exports.list = async (req, res) => {
  const artists = await Artist.find();
  if (_.isEmpty(artists)) return res.status(404).send({ status: false, message: 'artists not found' });

  res.status(200).send({ status: true, message: 'success: list of artists', data: artists });
};

/**
 * Retrieve a artist
 */
exports.detail = async (req, res) => {
  const artist = await Artist.findById(req.params.id);
  if (!artist) return res.status(404).send({ status: false, message: 'artist not found' });
  res.status(200).send({ status: true, message: 'success', data: artist });
};

exports.update = async (req, res) => {
  
};
