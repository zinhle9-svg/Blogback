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

module.exports = router;