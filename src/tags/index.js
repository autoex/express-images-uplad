const express = require('express');
const list = require('./list');
const create = require('./create');
const deleteHandler = require('./delete');
const router = express.Router();


router.use(express.json())
router.get('/_list', list)
router.post('/_create', create)
router.delete('/_delete/:tag', deleteHandler)

module.exports = router;
