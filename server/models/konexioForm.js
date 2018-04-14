const mongoose = require("mongoose");

const konexioFormSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true
  }
});

const kfs = mongoose.model("konexioFormSchema", konexioFormSchema)

module.exports = { kfs }
