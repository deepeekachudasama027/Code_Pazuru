const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
  level: {
    type: Number,
    required: true,
    trim: true,
  },
  code: [String],
  order: [String],
});

module.exports = Question = mongoose.model("question", quesSchema);
