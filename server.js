const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve public folder
app.use(express.static("public"));

// routes
app.use("/api/blogs", require("./routes/get"));
app.use("/api/blogs", require("./routes/create"));
app.use("/api/blogs", require("./routes/edit"));
app.use("/api/blogs", require("./routes/delete"));
app.use("/api/blogs", require("./routes/upload"));

// start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
