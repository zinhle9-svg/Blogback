const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();


router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = Blogs.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  Blogs.splice(index, 1);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
