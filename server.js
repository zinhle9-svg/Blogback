const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.use("/api/blogs", require("./routes/get"));
app.use("/api/blogs", require("./routes/create"));
app.use("/api/blogs", require("./routes/delete"));
app.use("/api/blogs", require("./routes/edit"));

app.listen(4000, () => console.log("Server running on port 4000"));
