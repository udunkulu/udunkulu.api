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
  const albums = await Album.find()
    .populate('artist');
  if (_.isEmpty(albums)) return res.status(404).send({ success: false, message: 'albums not found' });

  res.status(200).send({ success: true, message: 'success', data: albums });
};

/**
 * Create an album
 */
exports.create = async (req, res) => {
  if (!('file' in req)) {
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

  const { user } = req;
  // is Owner : check if it is the artist
  const isArtist = await Artist.findOne({
    user: user._id, _id: req.params.artistId
  });
  if (!isArtist) {
    return res.status(401).send({
      success: false, 
      message: 'Permission denied or artist does not exist'
    });
  }

  const owner = await Album.findOne({
    artist: req.params.artistId, _id: req.params.id
  });
  if (!owner) {
    return res.status(401).send({
      success: false,
      message: 'Permission denied or artist does not exist'
    });
  }

  // we want to make upload
  if (('file' in req)) {
    // in the future, try to
  // delete the one in cloud and make a new upload or replace it in cloudinary
    const response = await cloudinary.uploadImage(req.file.path);

    requestBody.cloudinary = response;
    requestBody.coverArt = response.secure_url;
  }

  const options = { new: true, runValidators: true };
  const filter = { _id: req.params.id, artist: req.params.artistId };

  await Album.findOneAndUpdate(filter, {
    ...requestBody
  }, options, async (error, album) => {
    if (error) throw error;
    if (!album) return res.status(404).send({ success: false, message: 'album not found' });

    await deleteFile(req.file);

    res.status(200).send({ success: true, message: 'success : ablum updated', data: album });
  });
};

/**
 * Delete an album
 */
exports.delete = async (req, res) => {

  
  const { user } = req;
  // is Owner : check if it is the artist
  const isArtist = await Artist.findOne({
    user: user._id, _id: req.params.artistId
  });
  if (!isArtist) {
    return res.status(401).send({
      success: false, 
      message: 'Permission denied or artist does not exist'
    });
  }

  const owner = await Album.findOne({
    artist: req.params.artistId, _id: req.params.id
  });
  if (!owner) {
    return res.status(401).send({
      success: false,
      message: 'Permission denied or album does not exist'
    });
  }

  const filter = { _id: req.params.id, artist: req.params.artistId };

  const album = await Album.findOneAndRemove(filter);

  if (!album) return res.status(404).send({ success: false, message: 'album not found or previously deleted' });

  res.status(200).send({ success: true, message: 'success: album deleted', data: album });
};
