const express = require('express');
const list = require('./list');
const create = require('./create');
const router = express.Router();


router.use(express.json())
router.get('/_list', list)
router.post('/_create', create)

module.exports = router;
