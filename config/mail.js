const nodemialer = require('nodemailer');

const Mailgen = require('mailgen');

const { EMAIL, PASSWORD, APP_URL } = require('./env');

const transporter = nodemialer.createTransport({
  service: 'Yahoo',
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Express-template',
    link: APP_URL
  }
});

module.exports = {
  transporter, mailGenerator
};
