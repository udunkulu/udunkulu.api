const express = require('express');

const router = express.Router();

const auth = require('../middlewares/authentication');
// const permit = require('../middlewares/permission');

const ArtistController = require('../controllers/artist-controller');
const AlbumController = require('../controllers/album-controller');

const albums = require('./albums');

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
  .post(AlbumController.create);

router.route('/:artistId/albums/:id')
  .get(AlbumController.detail)
  .put(AlbumController.update)
  .delete(AlbumController.delete);

module.exports = router;
