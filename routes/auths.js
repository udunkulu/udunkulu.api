const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/Auth/AuthController');
const auth = require('../middlewares/authentication');

router
  .get('/verify-email', AuthController.verifyEmail)
  // This expects an email on the request body: {"email": "sample@test.com"}
  .post('/forgot-password', AuthController.forgotPassword)
  .get('/password-reset', AuthController.passwordReset) // a view for resetting password
  .patch('/reset-password', AuthController.resetPassword)
  .post('/login', AuthController.login);

module.exports = router;
