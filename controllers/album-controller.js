/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const { Album, validateAlbum, validateUpdate } = require('../models/album');
const { Artist } = require('../models/artist');
const cloudinary = require('../config/cloudinary');
const { deleteFile } = require('../services/upload-service');

/**
 * Retrieve an album
 */
exports.detail = async (req, res) => {
  const album = await Album.findById(req.params.id).populate('artist');
  if (!album) return res.status(404).send({ success: false, message: 'album not found' });
  res.status(200).send({ success: true, message: 'success', data: album });
};

/**
 * List/Fetch all album
 */
exports.list = async (req, res) => {
  const albums = await Album.find();
  if (_.isEmpty(albums)) return res.status(404).send({ success: false, message: 'albums not found' });

  res.status(200).send({ success: true, message: 'success', data: albums });
};

/**
 * Create an album
 */
exports.create = async (req, res) => {
  if (!req.file || Object.keys(req.file).length === 0) {
    return res.status(400).send({
      success: false,
      message: 'no files were uploaded or attached'
    });
  }

  const validData = await validateAlbum(req.body);

  const artist = await Artist.findById(req.params.artistId);
  if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });

  // upload to cloudinary
  const response = await cloudinary.uploadImage(req.file.path);

  // delete the file
  await deleteFile(req.file);

  const album = new Album({
    ...validData,
    coverArt: response.secure_url,
    artist: artist._id,
    cloudinary: response
  });

  await album.save();

  res.status(201).send({
    success: true,
    message: 'album created',
    data: album
  });
};

/**
 * Update an album
 */
exports.update = async (req, res) => {
  const requestBody = await validateUpdate(req.body);

  const options = { new: true, runValidators: true };
  const filter = { _id: req.params.id, artist: req.params.artistId };

  await Album.findOneAndUpdate(filter, {
    coverArt: req.file.path,
    ...requestBody
  }, options, async (error, album) => {
    if (error) throw error;
    if (!album) return res.status(404).send({ success: false, message: 'album not found' });

    res.status(200).send({ success: true, message: 'success : ablum updated', data: album });
  });
};

/**
 * Delete an album
 */
exports.delete = async (req, res) => {
  const filter = { _id: req.params.id, artist: req.params.artistId };

  const album = await Album.findOneAndRemove(filter);

  if (!album) return res.status(404).send({ success: false, message: 'album not found or previously deleted' });

  res.status(200).send({ success: true, message: 'success: album deleted', data: album });
};
