const express = require('express');

const router = express.Router();
// Note that is is for fun only. To show team members that
// the backend app has being hosted on heroku successfully
router.get('/', (req, res) => {
  const teams = {
    'team-tenet': 'Chinwendu Nwazojie',
    'team-green lantern': 'Sophia Muo',
    'team-flash': 'Ezeh Livinus',
    'team-game-of-throne': 'Joshua Nwokoye',
    'team-arrows': 'Okolo Nathan',
    'team-intelligence': 'Christian Nwobodo',
    'team-agent-of-shield': 'Godson Njoku',
    'team-scorpions': 'Ifechukwu Udeogu'
  };

  const message = 'If your name is in this list, know that have made it in life';

  const nextStep = `Note that is for fun only. To show team members \n
  that the backend app has being hosted on heroku successfully`;

  res.status(200).send({ message, teams, nextStep });
});

module.exports = router;
