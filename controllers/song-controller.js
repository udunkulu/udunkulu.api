const cloudinary = require('../config/cloudinary');
const { Song } = require('../models/song');
const { Artist } = require('../models/artist');
const { Album } = require('../models/album');
const { deleteFile, secondsToMinute } = require('../services/song-service');

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

  // get artist info
  const artist = await Artist.findById(req.params.artistId);
  if (!artist) return res.status(404).send({ success: false, message: 'artist not found' });

  // get album info
  const album = await Album.findById(req.params.id);
  if (!album) return res.status(404).send({ success: false, message: 'album not found' });

  // upload to cloudinary
  const response = await cloudinary.uploads(req.file.path);
  // song duration/length in minute string
  const songDuration = await secondsToMinute(response.duration);

  const songData = {
    title: req.file.originalname,
    duration: songDuration,
    url: response.secure_url,
    cloudinary: response,
    artist: artist._id,
    album: album._id
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

exports.playSong = async (req, res) => {
  // res
  // return res.sendFile(path.join(__dirname, '../uploads/1611483241090-53331333601 Rites of Passage.mp3'))
};
