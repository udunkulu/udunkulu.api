const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    const dir = path.join(__dirname, '../');
    const filePath = path.join(dir, 'doc/index.html')
    res.sendFile(filePath)
});

module.exports = router;
