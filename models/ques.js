const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
    trim: true,
  },
  code: [String],
  order: [String],
});

module.exports = Question = mongoose.model("question", quesSchema);
// Question.insertMany([
//   {
//     level: "1",
//     order: [
//       "<html>",
//       "<head>",
//       "<title> web puzzle </title>",
//       "</head>",
//       "</html>",
//     ],
//     code: [
//       "</html>",
//       "<title> web puzzle </title>",
//       "<head>",
//       "<html>",
//       "</head>",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: "2",
//     order: [
//       "<html>",
//       "<head>",
//       "<title> web puzzle </title>",
//       "<body>",
//       "</body>",
//       "</head>",
//       "</html>",
//     ],
//     code: [
//       "<title> web puzzle </title>",
//       "<html>",
//       "<head>",
//       "</body>",
//       "</html>",
//       "<body>",
//       "</head>",
//     ],
//   },
// ]);
// Question.insertMany([
//   {
//     level: "3",
//     order: [
//       "<html>",
//       "<head>",
//       "<title> web puzzle </title>",
//       "</head>",
//       "</html>",
//     ],
//     code: [
//       "</html>",
//       "<title> web puzzle </title>",
//       "<head>",
//       "<html>",
//       "</head>",
//     ],
//   },
// ]);

// Question.insertMany([
//   {
//     level: "4",
//     order: [
//       "<html>",
//       "<head>",
//       "<title> web puzzle </title>",
//       "<body>",
//       "</body>",
//       "</head>",
//       "</html>",
//     ],
//     code: [
//       "<title> web puzzle </title>",
//       "<html>",
//       "<head>",
//       "</body>",
//       "</html>",
//       "<body>",
//       "</head>",
//     ],
//   },
// ]);
