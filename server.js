const express = require("express");
const hbs = require("hbs");
//comes with node
const path = require("path");
const axios = require("axios");
//for post
const bodyParser = require("body-parser");
/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
// app.use(bodyParser.json());
/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const port = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
//default hbs file
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("main-page.hbs");
})

// app.get("/profile-page", (req, res) => {
//   res.render("profile-page.hbs");
// })
//
app.get("/form.hbs", (req, res) => {
  res.render("form.hbs");
})

// app.post("/form.hbs", (req, res) => {
//     console.log(req.body);
// });


app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})
