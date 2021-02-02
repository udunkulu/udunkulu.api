const cloudinary = require('cloudinary').v2;
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
} = require('./env');

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

exports.uploadSong = async (file) => {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: 'video',
      folder: 'udunkulu/songs'
    });

    return response;
  } catch (error) {
    throw new Error(`From Cloudinary: ${error}`);
  }
};

exports.uploadImage = async (file) => {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: 'image',
      folder: 'udunkulu/images'
    });

    return response;
  } catch (error) {
    throw new Error(`From Cloudinary: ${error}`);
  }
};

// exports.cloudinary = cloudinary;
