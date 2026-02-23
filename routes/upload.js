const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Auto-create the folder if it doesn't exist
const uploadDir = 'public/images/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  console.log('REQ.FILE:', req.file);
  console.log('REQ.BODY:', req.body);

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // Read existing blogs
  const dbPath = path.join(__dirname, '../data/blogs.json');
  const blogs = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  // Create new blog entry
  const newBlog = {
    id: Date.now().toString(),
    blogName: req.body.blogName,
    category: req.body.category,
    author: req.body.author,
    publicationDate: req.body.publicationDate,
    content: req.body.content,
    image: `/images/${req.file.filename}`,
  };

  // Save to blogs.json
  blogs.push(newBlog);
  fs.writeFileSync(dbPath, JSON.stringify(blogs, null, 2));

  res.json(newBlog);
});

module.exports = router;