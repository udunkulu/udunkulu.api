// const cloudinary = require('../config/cloudinary');
const path = require('path');
const dir = path.join(__dirname, 'uploads/songs');
console.log(dir)

exports.upload = async (req, res) =>
  // const { file } = req;
  // return res.send('file uploads...');
  // res.send(dir)
  res.sendFile('C:\\code\\node\\project\\udunkulu\\uploads\\songs\\7d1ad87e0c08481251f235a51e44c7bd.mp3');
  // res.send({name : req.file.originalname, path: req.file.path });

 