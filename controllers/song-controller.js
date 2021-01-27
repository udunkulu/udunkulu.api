const path = require('path');
const cloudinary = require('../config/cloudinary');
const { Song } = require('../models/song');
const { deleteFile } = require('../services/song-service');

// const dir = path.join(__dirname, 'uploads/songs');
// console.log(dir);

exports.upload = async (req, res) => {
  // upload to cloudinary
  if (!req.file.hasOwnProperty('path')) {
    return res.status(404).send({
      success: false,
      message: 'no file found, please attached a file'
    });
  }
  const response = await cloudinary.uploads(req.file.path);

  // get artist info

  // get album info

  const songData = {
    title: req.file.originalname,
    duration: response.duration,
    url: response.secure_url,
    cloudinary: response
  };

  const song = new Song(songData);

  await song.save();

  await deleteFile(req.file);
  // return

  res.status(200).send({
    success: true,
    message: 'file uploaded',
    data: song
  });
};

exports.playSong = async (req, res) => {
  // res
  // return res.sendFile(path.join(__dirname, '../uploads/1611483241090-53331333601 Rites of Passage.mp3'))
};
