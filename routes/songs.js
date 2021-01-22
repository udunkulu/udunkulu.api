const express = require('express');

const router = express.Router();

const multer = require('multer');

const upload = multer({ dest: 'uploads/songs' });

const SongController = require('../controllers/song-controller');
const auth = require('../middlewares/authentication');
const permit = require('../middlewares/permission');

// router.route('/').all([auth])
//   .get([permit.grant('readAny', 'song')], SongController.list)
//   .post([permit.grant('createOwn', 'song')], 
// SongController.create); // Do not authenticate this, no detail to check against

// router.route('/:id').all([auth])
//   .get([permit.grant('readOwn', 'song')], SongController.detail)
//   .put([permit.grant('updateOwn', 'song')], SongController.update)
//   .delete([permit.grant('deleteAny', 'song')], SongController.delete);

router.route('/').all()
  // .get([permit.grant('readAny', 'song')], SongController.list)
  .post(SongController.upload);

// router.route('/:id').all()
//   .get([permit.grant('readOwn', 'song')], SongController.detail)
//   .put([permit.grant('updateOwn', 'song')], SongController.update)
//   .delete([permit.grant('deleteAny', 'song')], SongController.delete);


module.exports = router;
