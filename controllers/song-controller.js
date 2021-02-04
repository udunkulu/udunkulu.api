const _ = require('lodash');
const cloudinary = require('../config/cloudinary');
const { Song, validateSong, validateUpdate } = require('../models/song');
const { Artist } = require('../models/artist');
const { Album } = require('../models/album');
const { secondsToMinute } = require('../services/song-service');
const { deleteFile } = require('../services/upload-service');

// const dir = path.join(__dirname, 'uploads/songs');
// console.log(dir);

exports.upload = async (req, res) => {
  // check if a file was parsed by multer
  // if req has property 'file' then it definitely has file.path
  if (!('file' in req)) {
    return res.status(404).send({
      success: false,
      message: 'no file found, please attached a file'
    });
  }

  const validData = await validateSong(req.body);

  // get artist info
  const artist = await Artist.findById(req.params.artistId);
  if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });

  // get album info
  const album = await Album.findById(req.params.albumId);
  if (!album) return res.status(404).send({ success: false, message: 'album not found' });

  // upload to cloudinary
  const response = await cloudinary.uploadSong(req.file.path);
  // song duration/length in minute string
  const songDuration = await secondsToMinute(response.duration);

  const songData = {
    title: req.file.originalname,
    duration: songDuration,
    url: response.secure_url,
    cloudinary: response,
    artist: artist._id,
    album: album._id,
    ...validData

  };

  const song = new Song(songData);

  await song.save();

  await deleteFile(req.file);
  // return

  res.status(201).send({
    success: true,
    message: 'file uploaded',
    data: song
  });
};

/**
 * List/Fetch all songs
 */
exports.list = async (req, res) => {
  const songs = await Song.find()
    .populate('artist')
    .populate('album');

  if (_.isEmpty(songs)) return res.status(404).send({ success: false, message: 'songs not found' });

  res.status(200).send({ status: true, message: 'success: song list', data: songs });
};

/**
 * List all songs randomise
 */
exports.randomList = async (req, res) => {
  const songs = await Song.find().limit(50)
    .populate('artist')
    .populate('album');

  if (_.isEmpty(songs)) return res.status(404).send({ success: false, message: 'songs not found' });

  // randomise the list
  const randomSongs = songs.sort(() => Math.random() - 0.5);

  res.status(200).send({ success: true, message: 'success: random songs', data: randomSongs });
};

/**
 * Retrieve a song || play a song
 */
exports.detail = async (req, res) => {
  const song = await Song.findById(req.params.id)
    .populate('artist')
    .populate('album');

  if (!song) return res.status(404).send({ success: false, message: 'song not found' });

  res.status(200).send({ success: true, message: 'success', data: song });
};

/*
 Retrieve a song based on mood.
 */
exports.listMood = async (req, res) => {
  const song = await Song.find({ mood: req.body.mood });
  if (!song) return res.status(404).send({ success: false, message: 'mood not found ' });
  res.status(200).send({ success: true, message: 'success', data: song });
};

/*
 Retrieve a song based on genre.
 */
exports.listGenre = async (req, res) => {
  const song = await Song.find({ genre: req.body.genre });
  if (!song) return res.status(404).send({ success: false, message: 'genre not found ' });
  res.status(200).send({ success: true, message: 'success', data: song });
};

exports.delete = async (req, res) => {
  const filter = {
    _id: req.params.id,
    artist: req.params.artistId,
    album: req.params.albumId
  };

  const song = await Song.findOneAndRemove(filter);

  if (!song) return res.status(404).send({ success: false, message: 'song not found or previous deleted' });

  res.status(200).send({ success: true, message: 'success: song deleted', data: song });
};

/**
 * Update a song
 */
exports.update = async (req, res) => {
  const requestBody = await validateUpdate(req.body);

  // we want to make upload
  if (('file' in req)) {
    // in the future, try to
  // delete the one in cloud and make a new upload or replace it in cloudinary
    const response = await cloudinary.uploadSong(req.file.path);

    const songDuration = await secondsToMinute(response.duration);

    requestBody.cloudinary = response;
    requestBody.url = response.secure_url;
    requestBody.duration = songDuration;
    requestBody.title = requestBody.title ? requestBody.title : req.file.originalname;
  }

  const options = { new: true, runValidators: true };
  const filter = {
    _id: req.params.id,
    artist: req.params.artistId,
    album: req.params.albumId
  };

  await Song.findOneAndUpdate(filter, {
    ...requestBody
  }, options, async (error, song) => {
    if (error) throw error;

    if (!song) {
      return res.status(404).send({
        success: false,
        message: 'song not found ... may be it was not found under this album'
      });
    }
    await deleteFile(req.file);

    res.status(200).send({ success: true, message: 'success : ablum updated', data: song });
  });
};

/**
 * fetch latest songs
 */
exports.latestList = async (req, res) => {
  const latestSongs = await Song.find().sort({ _id: -1 }).limit(5)
    .populate('artist')
    .populate('album');

  if (_.isEmpty(latestSongs)) return res.status(404).send({ success: false, message: 'songs not found' });

  return res.send({ success: true, message: 'latest songs', data: latestSongs });
};
