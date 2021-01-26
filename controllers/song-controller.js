const path = require('path');
const { dataUriParser } = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const { Song } = require('../models/song');
const { deleteFile } = require('../services/song-service');

// const dir = path.join(__dirname, 'uploads/songs');
// console.log(dir);

// exports.upload = async (req, res) =>
//   // const { file } = req;
//   // return res.send('file uploads...');
//   // res.send(dir)
//   res.sendFile('C:\\code\\node\\project\\udunkulu\\uploads\\songs\\7d1ad87e0c08481251f235a51e44c7bd.mp3');
//   // res.send({name : req.file.originalname, path: req.file.path });

exports.upload = async (req, res) => {
  // parse the file buffer and return its content
  const file = await (await dataUriParser(req)).content;

  const response = await cloudinary.uploads(file);
 
  // // get artist info

  // // get album info
 console.log(req.file)
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
