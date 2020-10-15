const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');
const auth = require('../middlewares/authentication');
const permit = require('../middlewares/persmission');

router.post('/login', UserController.login);

router.route('/')
  .get(UserController.list)
  .post(UserController.create);

router.route('/:id')
  .get([auth, permit.grant('readOwn', 'userAccount')], UserController.detail)
  .put(UserController.update)
  .patch(UserController.update)
  .delete([auth, permit.grant('deleteAny', 'userAccount')], UserController.delete);

module.exports = router;
