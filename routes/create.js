const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/"); 
  },
  filename: function (req, file, cb) {
    // unique filename: timestamp + original name
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// blog with image upload
router.post("/", upload.single("pic1"), (req, res) => {
  console.log("REQ.BODY:", req.body); // blog fields
  console.log("REQ.FILE:", req.file); // uploaded file

  const newBlog = {
    id: Blogs.length + 1,
    blogName: req.body.blogName,
    category: req.body.category,
    author: req.body.author,
    publicationDate: req.body.publicationDate,
    content: req.body.content,
    image: req.file ? req.file.filename : null, // save file name
  };

  Blogs.push(newBlog);
  console.log(Blogs);

  res.json(newBlog);
});

module.exports = router;
