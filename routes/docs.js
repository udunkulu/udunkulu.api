const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // This is the hosted api doc link of this app on netlify
  // Host this app's doc and make sure on the server to point its public folder to
  // documentations/doc/
  // copy the link to the hosted and replace it with this one
  res.redirect('https://expressjs-template.netlify.app/');
});

module.exports = router;
