const _ = require('lodash');
const { Album } = require('../models/album');
const { Song } = require('../models/song');
const { Artist } = require('../models/artist');
const { User } = require('../models/user');

exports.search = async (req, res) => {
  const query = new RegExp(req.query.q.trim(), 'gi');

  const songs = await Song
    .find({ $text: { $search: query } }).select(['_id', 'title']);

  const albums = await Album
    .find({ $text: { $search: query } }).select(['_id', 'title']);

  const artists = await Artist
    .find({ $text: { $search: query } }).select(['_id', 'stageName']);

  const users = await User
    .find({ $text: { $search: query } })
    .select(['_id', 'firstName', 'lastName']);

  if (_.isEmpty(songs) && _.isEmpty(albums) && _.isEmpty(artists) && _.isEmpty(users)) {
    return res.status(404).send({
      success: false,
      message: 'we could not find what you are looking for'
    });
  }

  const results = {
    songs, albums, artists, users
  };

  res.status(200).send({ success: true, data: results });
};
