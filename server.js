const express = require("express");
const hbs = require("hbs");
//comes with node
const path = require("path");
//for post
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const app = express();

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("views", path.join(__dirname, "views"));
//default hbs file
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("main-page.hbs");
})

app.get("/form/new", (req, res) => {
  res.render("newForm.hbs");
})

app.post("/form/new", (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})
