const express = require("express");
const hbs = require("hbs");
//comes with node
const path = require("path");
const axios = require("axios");

const port = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
//default hbs file
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("main-page.hbs");
})

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})
