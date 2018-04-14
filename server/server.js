const express = require("express");
const hbs = require("hbs");
//comes with node
const path = require("path");
//for post
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

const {mongoose} = require("./db/mongoose.js");
const {kfs} = require("./models/konexioForm.js");

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("views", path.join(__dirname, "../views"));
//default hbs file
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "../public")))

app.get("/", (req, res) => {
  res.render("main-page.hbs");
})

app.get("/form/new", (req, res) => {
  res.render("newForm.hbs");
})

app.post("/form/new", (req, res) => {
const newUser = new kfs ({
  name: req.body.name
})
newUser.save()
  .then(doc => {
    res.redirect("/");
    // res.send(doc);
  }, e => {
    res.status(404).send(e);
  })
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})
