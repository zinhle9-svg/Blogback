const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const blogs = require("./routes/blogs");

app.use(cors());
app.use(express.json());

// to get content of a specific blog from the front end
// do i need to use [1] to get specific content, if i have my blog information as an array of objects?
app.get("/", (req, res) => {
  if (blogs.length === 0) {
    res.json("No blogs found");
  } else {
    res.json(blogs[1]);
  }
});

// create a new blog
app.post("/createBlog", (req, res) => {
  const { title, category, content } = req.body;
  if (!title || !category || !content) {
    res.json("all fields required");
  } else {
    const newBlog = {
      id: blogs.length + 1,
      title,
      category,
      content,
    };
  }
  blogs.push(newBlog);
});

// delete a blog
app.delete("/blogs/:id", (req, res) => {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(req.params.id));
});

// where the server should run
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
