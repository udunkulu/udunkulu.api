const DatauriParser = require('datauri/parser');
const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
  // console.log(file.mimetype);

  if (
    file.mimetype === 'audio/mpeg'
    || file.mimetype === 'audio/wave'
    || file.mimetype === 'audio/wav'
     || file.mimetype === 'audio/mp3'
  ) {
    cb(null, true);
  } else {
    cb(new Error('wrong file type'));
    cb(null, false);
  }
};

const storage = multer.memoryStorage();

const parser = new DatauriParser();

/**
 * @description parse a file buffer (req.file.buffer) as package by multerjs
 * @param {Object} req Express Request object
 * @returns {Object} result containing file content and other properties defined by dataUri
 */
exports.dataUriParser = async (req) => {
  const result = await parser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );
  return result;
};

exports.upload = multer({
  storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter
});
