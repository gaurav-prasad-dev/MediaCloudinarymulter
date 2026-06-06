const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const mediaRoutes = require("./routes/mediaRoutes");

app.use("/api/media", mediaRoutes);


app.get("/", (req, res) => {
  res.send("MediaVault API Running");
});


module.exports = app;