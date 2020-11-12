const express = require('express');

const router = express.Router();

const UserController = require('../controllers/UserController');
const auth = require('../middlewares/authentication');
const permit = require('../middlewares/permission');

router.post('/login', UserController.login);

router.route('/')
  .get([auth], UserController.list)
  .post(UserController.create);

router.route('/:id').all([auth])
  .get([permit.grant('readOwn', 'userAccount')], UserController.detail)
  .put([permit.grant('updateOwn', 'userAccount')], UserController.update)
  .patch([permit.grant('updateOwn', 'userAccount')], UserController.update)
  .delete([permit.grant('deleteAny', 'userAccount')], UserController.delete);

module.exports = router;
