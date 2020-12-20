const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/Auth/AuthController');
const auth = require('../middlewares/authentication');

router.route('/verify')
  .get(AuthController.verifyEmail);

module.exports = router;
