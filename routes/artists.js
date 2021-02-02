const express = require('express');

const router = express.Router();

// const auth = require('../middlewares/authentication');
// const permit = require('../middlewares/permission');

const ArtistController = require('../controllers/artist-controller');
const AlbumController = require('../controllers/album-controller');
const SongController = require('../controllers/song-controller');

// const albums = require('./albums');
// const songs = require('./songs');

const upload = require('../config/multer');

router.route('/')
  .get(ArtistController.list)
  .post(ArtistController.create); // Do not authenticate this, no detail to check against

router.route('/:id')// .all([auth])
  .get(ArtistController.detail)
  .put(ArtistController.update);
//   .delete(ArtistController.delete);

// allow album to make use of artists resource
// /:artistsId/albums
router.route('/:artistId/albums')
  .get(AlbumController.list)
  .post([upload.upload.single('albumCoverArt')], AlbumController.create);

router.route('/:artistId/albums/:id')
  .get(AlbumController.detail)
  .put([upload.upload.single('albumCoverArt')], AlbumController.update)
  .delete(AlbumController.delete);

/**
 * Songs
 * /:artists/artistId/songs
 */

router.route('/:artistId/albums/:albumId/songs')
  .post([upload.upload.single('_song')], SongController.upload)
  .get(SongController.list);

router.route('/:artistId/albums/:albumId/songs/:id')
  .get(SongController.detail)
  .delete(SongController.delete);

module.exports = router;
