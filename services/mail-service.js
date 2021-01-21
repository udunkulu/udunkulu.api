const { mailGenerator, transporter } = require('../config/mail');
const { APP_URL, BASE_PATH } = require('../config/env');

const base = `${APP_URL}${BASE_PATH}`;

/**
 * Send a verification mail to this user on signup
 * used at: user-controller
 */
exports.sendVerificationMail = async (user, token) => {
  // send mail
  const response = {
    body: {
      name: `${user.firstName} ${user.lastName}`,
      intro: 'Welcome to `Udúnkúlú',
      action: {
        instructions: 'To continue, please click here:',
        button: {
          text: 'Verify your account',
          link: `${base}/users/verify-email?token=${token}`
        }
      },
      outro: 'Thanks for signing up. Enjoy the gbedu..'
    }
  };

  const mail = mailGenerator.generate(response);

  const message = {
    from: '`Udúnkúlú <ezehlivinus@yahoo.com>',
    to: user.email,
    subject: 'Registration successful',
    html: mail
  };

  await transporter.sendMail(message);
  // return true;
};

/**
 * send a password reset mail to a user
 * used at: auth-controller
 */
exports.sendPasswordResetMail = async (user) => {
  const token = user.generateAuthToken();
  // send mail
  const response = {
    body: {
      name: `${user.firstName} ${user.lastName}`,
      intro: 'Password Reset Link',
      action: {
        instructions: 'If you did not request for this mail, Please Ignore it. To reset your password, click on the link below:',
        button: {
          text: 'Reset password',
          link: `${base}/users/password-reset?token=${token}`
        }
      },
      outro: 'Do not share this link with anyone.'
    }
  };

  const mail = mailGenerator.generate(response);

  const message = {
    from: '`Udúnkúlú <ezehlivinus@yahoo.com>',
    to: user.email,
    subject: 'Reset your password',
    html: mail
  };

  await transporter.sendMail(message);
  // return true;
};
