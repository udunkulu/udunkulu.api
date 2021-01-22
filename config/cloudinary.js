const cloudinary = require('cloudinary');
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
} = require('./env');

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_CLOUD_NAME,
  api_secret: CLOUDINARY_CLOUD_NAME
});

exports.uploads = async (file) => {
  const result = await cloudinary.v2.uploader.upload(file,
    { resource_type: 'video', folder: 'udunkulu/songs' });

  return result;
};
