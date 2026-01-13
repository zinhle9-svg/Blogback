const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
  const newBlog = {
    id: Blogs.length + 1,
    ...req.body
  };

  Blogs.push(newBlog);
  res.json(newBlog);
});

module.exports = router;
