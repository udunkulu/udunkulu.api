const _ = require('lodash');
const { Album } = require('../models/album');
const { Song } = require('../models/song');
const { Artist } = require('../models/artist');
const { User } = require('../models/user');

exports.search = async (req, res) => {
  const query = new RegExp(req.query.q.trim(), 'gi');

<<<<<<< HEAD
  const songs = await Song
    .find({ $text: { $search: query } }).select(['_id', 'title'])
    .populate('artist')
    .populate('album');

  const albums = await Album
    .find({ $text: { $search: query } }).select(['_id', 'title', 'coverArt']);

  const artists = await Artist
    .find({ $text: { $search: query } }).select(['_id', 'stageName', 'avater']);
=======
  const songs = await Song.find({ $text: { $search: query } })
    .select(['_id', 'title'])
    .populate('album artist');

  const albums = await Album.find({ $text: { $search: query } })
    .select(['_id', 'title'])
    .populate({ path: 'songs', populate: 'album artist' });

  const artists = await Artist.find({ $text: { $search: query } })
    .select(['_id', 'stageName'])
    .populate({ path: 'songs', populate: 'album artist' });
>>>>>>> 5819fc6... Feature: Prepopulate songs

  const users = await User.find({ $text: { $search: query } }).select(['_id', 'firstName', 'lastName']);

  if (_.isEmpty(songs) && _.isEmpty(albums) && _.isEmpty(artists) && _.isEmpty(users)) {
    return res.status(404).send({
      success: false,
      message: 'we could not find what you are looking for'
    });
  }

  const results = {
    songs,
    albums,
    artists,
    users
  };

  res.status(200).send({ success: true, data: results });
};
