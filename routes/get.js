const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/blogs.json");

// GET all blogs
router.get("/", (req, res) => {
  const blogs = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  res.json(blogs);
});
// get blog by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blogs = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const blog = blogs.find(b => b.id == id);
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  res.json(blog);
});
module.exports = router;