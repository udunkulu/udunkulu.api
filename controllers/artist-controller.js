/* eslint-disable no-underscore-dangle */
const { Artist, validateArtist } = require('../models/artist');

exports.create = async (req, res) => {

  const validData = await validateArtist(req.body);

  const artist = new Artist({
    ...validData,
    user: req.user._id
  });

  await artist.save();
};
