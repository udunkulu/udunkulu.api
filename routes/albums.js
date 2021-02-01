const express = require('express');

const AlbumController = require('../controllers/album-controller');

const router = express.Router();

router.route('/')
  .get(AlbumController.list);

router.route('/:id').all()
  .get(AlbumController.detail);

module.exports = router;
