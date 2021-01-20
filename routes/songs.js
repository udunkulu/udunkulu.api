const express = require('express');

const router = express.Router();

// const SongController = require('../controllers/song-controller');
const SongController = { create, list, detail, delete, update };
const auth = require('../middlewares/authentication');
const permit = require('../middlewares/permission');

router.route('/')
  .get([auth], SongController.list)
  .post(SongController.create); // Do not authenticate this, no detail to check against

router.route('/:id').all([auth])
  .get([permit.grant('readOwn', 'song')], SongController.detail)
  .put([permit.grant('updateOwn', 'song')], SongController.update)
  .patch([permit.grant('updateOwn', 'song')], SongController.update)
  .delete([permit.grant('deleteAny', 'song')], SongController.delete);

module.exports = router;