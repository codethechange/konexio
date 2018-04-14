const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const database = process.env.MONGODB_URI || 'mongodb://localhost:27017/KonexioFormInfo';

mongoose.connect(database)
.then(() => {
  console.log("Successful connection to database");
})
.catch(() => {
  console.log("Unable to to connect to database");
})

module.exports = { mongoose }
