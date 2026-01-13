const express = require("express");
const router = express.Router();
const Blogs = require("../Data/blogs");

router.get("/api/blogs", (req, res) => {
  res.json(Blogs);
});

module.exports = router;
