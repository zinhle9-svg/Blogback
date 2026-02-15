const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'public/images/' })
const router = express.Router();


router.post('/api/upload', (req,res ) => {

})
router.post('/public/images', upload.single('pic1'), (req, res) => {
  res.send('File uploaded successfully')
})

module.exports = router;
