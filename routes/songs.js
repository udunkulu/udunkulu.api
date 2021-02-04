const express = require('express');

const router = express.Router();

const SongController = require('../controllers/song-controller');

router.route('/').all()
  .get(SongController.list)

router.post('/moods', SongController.listMood);
router.post('/genres', SongController.listGenre);

router.get('/latests', SongController.latestList);
router.get('/randoms', SongController.randomList);

router.route('/:id').all()
  .get(SongController.detail);

module.exports = router;

