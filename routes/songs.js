const express = require('express');

const router = express.Router();
// const cloudinar = require('../config/cloudinary').
// const multer = require('multer');

// const upload = multer({ dest: 'uploads/songs' });
const upload = require('../config/multer');

const SongController = require('../controllers/song-controller');
// const auth = require('../middlewares/authentication');
// const permit = require('../middlewares/permission');

router.route('/').all()
  .get(SongController.list)
  // .post([upload.upload.single('_song')], SongController.upload);

router.post('/moods', SongController.listMood);
router.post('/genres', SongController.listGenre);

router.route('/:id').all()
  .get(SongController.detail);

module.exports = router;
