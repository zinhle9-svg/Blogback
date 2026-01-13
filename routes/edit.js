const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = Blogs.find(b => b.id === id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  Object.assign(blog, req.body);
  res.json(blog);
});

module.exports = router;
