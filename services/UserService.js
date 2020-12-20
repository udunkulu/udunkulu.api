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
          link: `${APP_URL}/${BASE_PATH}/users/verify?token=${token}`
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
