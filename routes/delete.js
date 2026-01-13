const express = require("express");
const router = express.Router();
const Blogs = require("../Data/blogs");

router.delete("/:id", (req, res) => {
  const index = Blogs.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Not found" });

  Blogs.splice(index, 1);
  res.json({ message: "Deleted" });
});

module.exports = router;
