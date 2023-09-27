//initializing express
const express = require("express");
const app = express();

//To applying css
app.use(express.static("public/"));

//using ejs
app.set("view engine", "ejs");

//home
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//blog
app.get("/blog", (req, res) => {
  res.render("components/singleblog.ejs");
});

//login
app.get("/login", (req, res) => {
  res.render("components/form/login.ejs");
});

//register
app.get("/register", (req, res) => {
  res.render("components/form/register.ejs");
});

//dashboard
app.get("/dashboard", (req, res) => {
  res.render("components/dashboard/dashboard.ejs");
});

//createblog
app.get("/create", (req, res) => {
  res.render("components/dashboard/createblog.ejs");
});

//viewblog
app.get("/view", (req, res) => {
  res.render("components/dashboard/allblog.ejs");
});

//editblog
app.get("/edit", (req, res) => {
  res.render("components/dashboard/editblog.ejs");
});

app.listen(8000, () => {
  console.log("Project is running at port 8000");
});
