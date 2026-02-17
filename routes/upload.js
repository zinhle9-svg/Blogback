const express = require('express');
const multer = require('multer');

const router = express.Router();

// storage location
const upload = multer({ dest: 'public/images/' });

// upload route
router.post('/public/images', upload.single('pic1'), (req, res) => {

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  res.send('File uploaded successfully');
});

module.exports = router;
