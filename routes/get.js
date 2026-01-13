const Blogs = require("../data/blogs");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.json(Blogs);
});

module.exports = router;
