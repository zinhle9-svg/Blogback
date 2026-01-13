const express = require("express");
const router = express.Router();
const blogs = require("../routes/blogs");

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const blog = blogs.find(b => b.id === id);

  if (!blog) return res.status(404).json({ error: "Blog not found" });

  blog.title = req.body.title;
  blog.category = req.body.category;
  blog.content = req.body.content;

  res.json(blog);
});

module.exports = router;
