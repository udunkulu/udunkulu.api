const express = require('express');

const AlbumController = require('../controllers/album-controller');

const router = express.Router();

router.route('/')
  .get(AlbumController.list)
  .post(AlbumController.create);

router.route('/:id').all()
  .get(AlbumController.detail)
  .put(AlbumController.update)
  .patch(AlbumController.update)
  .delete(AlbumController.delete);

module.exports = router;
