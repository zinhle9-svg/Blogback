const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();


router.post("/upload", (req, res) => {
  res.send("File uploaded successfully");
  console.log(req);
  const newBlog = {
    id: Blogs.length + 1,
    ...req.body
  };


  Blogs.push(newBlog);
  console.log(Blogs);
  res.json(newBlog);
});

module.exports = router;
