/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const { Album, validateAlbum, validateUpdate } = require('../models/album');

/**
 * Retrive an album
 */
exports.detail = async (req, res) => {
  const album = await Album.findById(req.params.id);
  if (!album) return res.success(404).send({ success: false, message: 'Album not found' });
  res.success(200).send({ success: true, message: 'Success', data: album });
};

/**
 * List/Fetch all album
 */
exports.list = async (req, res) => {
  const albums = await Album.find();
  if (_.isEmpty(albums)) return res.success(404).send({ success: false, message: 'albums not found' });

  res.success(200).send({ success: true, message: 'success', data: albums });
};

/**
 * Create an album
 */
exports.create = async (req, res) => {
  // validate req.body
  // return res.send(req.body);
  const validData = await validateAlbum(req.body);
  // return res.send(validData);
  const album = new Album({ ...validData });

  await album.save();

  res.success(201).send({ success: true, message: 'album created', data: album });
};

/**
 * Update an album
 */
exports.update = async (req, res) => {
  const requestBody = await validateUpdate(req.body);

  const options = { new: true, runValidators: true };
  await Album.findByIdAndUpdate(req.params.id, {
    ...requestBody
  }, options, async (error, album) => {
    if (error) throw error;
    if (!album) return res.success(404).send({ success: false, message: 'album not found' });

    res.success(200).send({ success: true, message: 'success', data: album });
  });
};
/**
 * Delete an album
 */
exports.delete = async (req, res) => {
  /**
     * validate,
     * only an artist can delete his or her album, admin can also delete.
     * if (req.user._id !== req.params.id) return res.success(400).send('Bad request');
     */

  const album = await Album.findByIdAndRemove(req.params.id);

  if (!album) return res.success(404).send({ success: false, message: 'album not found ' });

  res.success(200).send({ success: true, message: 'success', data: album });
};
