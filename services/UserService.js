const Joi = require('joi');
const { mailGenerator, transporter } = require('../config/mail');
const { EMAIL, APP_URL, BASE_PATH } = require('../config/env');

/**
 * Send a verification mail to this user on signup
 */
exports.sendVerificationMail = async (user, token) => {
  // send mail
  const response = {
    body: {
      name: `${user.firstName} ${user.lastName}`,
      intro: 'Welcome to Expressjs template',
      action: {
        instructions: 'To continue, please click here:',
        button: {
          text: 'Verify your account',
          link: `${APP_URL}/${BASE_PATH}/users/verify-email?token=${token}`
        }
      },
      outro: 'Thanks for signing up.'
    }
  };

  const mail = mailGenerator.generate(response);

  const message = {
    from: 'Expressjs Template <ezehlivinus@yahoo.com>',
    to: user.email,
    subject: 'Registration successful',
    html: mail
  };

  await transporter.sendMail(message);
  // return true;
};

/**
 * validated an email address
 */
exports.validateEmail = async (email) => {
  // email schema
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase()
      .required()
  });

  const value = await schema.validateAsync(email);

  return value;
};

/**
 * send a password reset mail to a user
 */
exports.sendResetPasswordMail = async (user) => {
  const token = user.generateAuthToken();
  // send mail
  const response = {
    body: {
      name: `${user.firstName} ${user.lastName}`,
      intro: 'Password Reset Link',
      action: {
        instructions: 'To reset your password, click on the link below:',
        button: {
          text: 'Reset password',
          link: `${APP_URL}/${BASE_PATH}/users/reset-password?token=${token}`
        }
      },
      outro: 'Do not shared this link with anyone. Except if the person is helping to reset your password'
    }
  };

  const mail = mailGenerator.generate(response);

  const message = {
    from: 'Expressjs Template <ezehlivinus@yahoo.com>',
    to: user.email,
    subject: 'Reset your password',
    html: mail
  };

  await transporter.sendMail(message);
  // return true;
};
