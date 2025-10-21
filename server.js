const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const blogs = require("./routes/blogs");
const bodyParser = require("body-parser");

// C:\Documents\Blogback\images\fashion.jpg

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(bodyParser.json());
// to get content of a specific blog from the front end
// do i need to use [1] to get specific content, if i have my blog information as an array of objects?
app.get("/api/blogs", (req, res) => {
  if (blogs.length === 0) {
    res.json("No blogs found");
  } else {
    res.json(blogs);
  }
});

// create a new blog
app.post("/createBlog", (req, res) => {

  const { title, category, content } = req.body;

  if (!title || !category || !content) {
    return res.status(400).json({ error: "All fields required" }); 
  }

  const newBlog = {
    id: blogs.length + 1,
    title,
    category,
    content,
  };

  blogs.push(newBlog);

  res.status(201).json(newBlog);
});
//edit a post

app.put("/api/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, category, content } = req.body;
  const blogIndex = blogs.findIndex((b) => b.id === id);
  if (blogIndex === -1) {
    return res.status(404).json({ error: "Blog not found" });
  }
  if (!title || !category || !content) {
    return res.status(400).json({ error: "All fields required" });
  }
  blogs[blogIndex] = {
    ...blogs[blogIndex], 
    title,
    category,
    content,
  };

  res.json({ message: "Blog updated", blog: blogs[blogIndex] });
});


// delete a blog
app.delete("/api/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blogIndex = blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const deleted = blogs.splice(blogIndex, 1); 
  res.json({ message: "Blog deleted", blog: deleted[0] });
});



// where the server should run
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
