const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/blogs.json");

router.delete("/:id", (req, res) => {
  const id = (req.params.id);

  // Read from file
  const blogs = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const index = blogs.findIndex((b) => b.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const deletedBlog = blogs.splice(index, 1);

  // Write back to file
  fs.writeFileSync(dbPath, JSON.stringify(blogs, null, 2), "utf-8");

  res.json({ message: "Blog deleted", blog: deletedBlog[0] });
});

module.exports = router;