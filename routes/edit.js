const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const blogsFilePath = path.join(__dirname, "../data/blogs.json");

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Read fresh data from file
  const Blogs = JSON.parse(fs.readFileSync(blogsFilePath, "utf-8"));

  const blogIndex = Blogs.findIndex((b) => b.id == id);

  if (blogIndex === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  // Merge updated fields
  Blogs[blogIndex] = { ...Blogs[blogIndex], ...req.body };

  // Write updated array back to file
  fs.writeFileSync(blogsFilePath, JSON.stringify(Blogs, null, 2), "utf-8");

  console.log("Updated Blog:", Blogs[blogIndex]);
  res.json(Blogs[blogIndex]);
});

module.exports = router;