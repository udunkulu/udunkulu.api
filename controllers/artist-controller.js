/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const { Artist, validateArtist, validateUpdate } = require('../models/artist');
const UserService = require('../services/user-service');
const cloudinary = require('../config/cloudinary');
const { deleteFile } = require('../services/upload-service');

exports.create = async (req, res) => {
  const validData = await validateArtist(_.pick(req.body, ['stageName', 'role']));

  // make a user
  req.body.role = validData.role;
  req.body.stageName = validData.stageName;
  const user = await UserService.createUser(req, res);

  // log the user in
  const token = user.generateAuthToken();

  const artist = new Artist({
    ...validData,
    user: user._id
  });

  await artist.save();

  res.header('token', token).status(201).send({
    success: true,
    message: 'created',
    data: { user, artist, token }
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
/**
 * Update an artist
*/
exports.update = async (req, res) => {
  const validBody = await validateUpdate(_.omit(req.body, ['user']));

  // we want to make upload
  if (('file' in req)) {
    const response = await cloudinary.uploadImage(req.file.path);

    // validBody.cloudinary = response;
    validBody.avatar = response.secure_url;
  }

  const options = { new: true, runValidators: true };

  await Artist.findByIdAndUpdate(req.params.id, {
    ...validBody
  }, options, async (error, artist) => {
    if (error) throw error;
    if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });

    await deleteFile(req.file);

    res.status(200).send({ success: true, message: 'update was success', data: artist });
  });
};

// exports.delete = async (req, res) => {
//   // we may want to remove this artist's resources
// };
