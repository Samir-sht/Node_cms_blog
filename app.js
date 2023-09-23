//initializing express
const express = require("express");
const app = express();

//To applying css
app.use(express.static("public/"));

//using ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(8000, () => {
  console.log("Project is running at port 8000");
});
