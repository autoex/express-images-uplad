const express = require('express');
const multer = require('multer');
const upload = require('./upload');
const path = require('path');
const { uid } = require('uid');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'static'));
  },
  filename: function (req, file, cb) {
    const id = uid(5);
    let extension = file.originalname.split('.').pop()
    console.log(extension)
    cb(null,  `${id}.${extension}`);
  },
});

const uploadMiddleware = multer({ storage: storage });

router.post('/_upload', uploadMiddleware.single('image'), upload);

module.exports = router;
