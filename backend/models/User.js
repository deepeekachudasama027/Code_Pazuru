const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  institute: {
    type: String,
    required: [true, "Please provide Institute Name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  level: {
    type: String,
    required: true,
    trim: true,
    default: 1,
  },
  score: {
    type: Number,
    default: 400,
  },
  creation_date: {
    type: Date,
    default: new Date(),
  },
  updation_date: {
    type: Date,
    default: new Date(),
  },
  correct_count: {
    type: Number,
    default: 0,
  },
  flag: {
    type: Number,
    default: 0,
  },
  items: {
    type: [String],
    default: [
      // level 1
      "{",
      "}\n};",
      "class Solution \n {",
      " int function(int n) \n{",
      "public:",
      " x2=result;",
      "result=x2+x1;",
      "int x1=0;\nint x2=1;\nint result=0;",
      "for(int i=1;i<=n;i++)",
      "}\nreturn result;",
      "x1=x2;",
    ],
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
