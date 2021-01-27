const cloudinary = require('../config/cloudinary');
const { Song } = require('../models/song');
const { deleteFile } = require('../services/song-service');

// const dir = path.join(__dirname, 'uploads/songs');
// console.log(dir);

exports.upload = async (req, res) => {
  // check if a file was parsed by multer
  // if req has property 'file' || files, then it definitely has files.path || file.path
  if (!('file' in req) || !('files' in req)) {
    return res.status(404).send({
      success: false,
      message: 'no file found, please attached a file'
    });
  }

  // upload to cloudinary
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
