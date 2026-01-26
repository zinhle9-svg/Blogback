const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use( express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", require("./routes/get"));
app.use("/api/blogs", require("./routes/create"));
app.use("/api/blogs", require("./routes/edit"));
app.use("/api/blogs", require("./routes/delete"));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
