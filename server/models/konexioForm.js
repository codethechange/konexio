const mongoose = require("mongoose");

// PASSWORD ENCRYPTION
//http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
// const mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     bcrypt = require('bcrypt'),
//     SALT_WORK_FACTOR = 10;

const konexioFormSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  // emailAddress: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true,
  //   unique: true
  // },
  // countryOrigin: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  asylumStatus: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  userAge: {
    type: Number,
    required: true,
    minLength: 1,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  userPhone: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true
  },
  userLang: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  userCourse: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  // currentOccupation: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  // careerGoals: {
  //   type: Mixed,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  // educationLevel: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  // hobbies: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  // wordDescribers: {
  //   type: String,
  //   required: true,
  //   minLength: 1,
  //   trim: true
  // },
  skillq1: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  skillq2: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  skillq3: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  skillq4: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

const kfs = mongoose.model("konexioFormSchema", konexioFormSchema)

module.exports = { kfs }
