const express = require('express');
const list = require('./list');
const router = express.Router();

router.get('/_list', list)

module.exports = router;
