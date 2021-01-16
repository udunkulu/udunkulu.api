const express = require('express');

const router = express.Router();

const songController = require('../controllers/song-controller');
const auth = require('../middlewares/authentication');
// const permit = require('../middlewares/permission');
// const authRoutes = require('./auths');

router.use(authRoutes);

router.route('/')
  .get([auth], UserController.list)
  .post(songController.create); // Do not authenticate this, no detail to check against

router.route('/:id').all([auth])
  .get([permit.grant('readOwn', 'songAccount')], songController.detail)
  .put([permit.grant('updateOwn', 'userAccount')], songController.update)
  .patch([permit.grant('updateOwn', 'userAccount')], UserController.update)
  .delete([permit.grant('deleteAny', 'userAccount')], UserController.delete);

module.exports = router;
