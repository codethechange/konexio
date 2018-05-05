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
  // res.render("form.hbs");
})

app.post("/form/new", (req, res) => {
const newUser = new kfs({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  emailAddress: req.body.email,
  countryOrigin: req.body.countryOrigin,
  asylumStatus: req.body.asylumq,
  userAge:req.body.age,
  gender: req.body.gender,
  userPhone: req.body.phoneNum,
  userLang: req.body.languages,
  userCourse: req.body.course,
  currentOccupation: req.body.currentOccupation,
  careerGoals: req.body.careerGoals,
  educationLevel: req.body.educationLevel,
  hobbies: req.body.hobbies,
  wordDescribers: req.body.wordDescribers,
  skillq1: req.body.skillq1,
  skillq2: req.body.skillq2,
  skillq3: req.body.skillq3,
  skillq4: req.body.skillq4
})
newUser.save()
  .then(doc => {
    // res.redirect("/");
    res.send(doc);
  }, e => {
    res.status(404).send(e);
  })
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})
