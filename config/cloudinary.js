const cloudinary = require('cloudinary');
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
} = require('./env');

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

exports.uploads = async (file) => {
  const response = await cloudinary.v2.uploader.upload(file, {
    resource_type: 'video',
    folder: 'udunkulu/songs'
  });

  return response;
};

exports.cloudinary = cloudinary;
