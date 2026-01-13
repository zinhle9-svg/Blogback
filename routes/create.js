const express = require("express");
const router = express.Router();
const blogs = require("../routes/blogs");

router.post("/blogs", (req, res) => {
  const { title, category, content } = req.body;

  if (!title || !category || !content) {
    return res.status(400).json({ error: "All fields required" });
  }

  const newBlog = {
    id: Date.now(),
    title,
    category,
    content,
  };

  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

module.exports = router;
