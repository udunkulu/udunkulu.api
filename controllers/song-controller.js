const cloudinary = require('../config/cloudinary');
const path = require('path');
const { Song } = require('../models/song');

// const dir = path.join(__dirname, 'uploads/songs');
// console.log(dir);

// exports.upload = async (req, res) =>
//   // const { file } = req;
//   // return res.send('file uploads...');
//   // res.send(dir)
//   res.sendFile('C:\\code\\node\\project\\udunkulu\\uploads\\songs\\7d1ad87e0c08481251f235a51e44c7bd.mp3');
//   // res.send({name : req.file.originalname, path: req.file.path });

exports.upload = async (req, res) => {
  try {
    const music = new Song({
      title: req.file.originalname,
      artist: 'Ezeh',
      music: req.file
    });
    // return res.send(req.file.fieldname)
    console.log(music);
    const response = await cloudinary.uploads(req.file.path);
    let newMusic = await music.save();

    res.status(200).json({ data: newMusic, response });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.playSong = async (req, res) => {
  // res
  // return res.sendFile(path.join(__dirname, '../uploads/1611483241090-53331333601 Rites of Passage.mp3'))
}
