const express = require('express');

const router = express.Router();

const ArtistController = require('../controllers/artist-controller');
// I am not sure that you will use this so I commented it out

const auth = require('../middlewares/authentication');
// const permit = require('../middlewares/permission');

router.route('/')
  .get(ArtistController.list)
  .post(ArtistController.create); // Do not authenticate this, no detail to check against

router.route('/:id')// .all([auth])
  .get(ArtistController.detail)
  .put(ArtistController.update);
//   .delete(ArtistController.delete);

module.exports = router;
