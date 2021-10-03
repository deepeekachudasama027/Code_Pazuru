const generateToken = require("../utils/generateToken.js");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Ques = require("../models/ques");

// login
exports.login = async (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    res.json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (err) {
    next(err);
  }
};

// register
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (err) {
    next(err);
  }
};

var level, score, username;

const startDate = new Date("oct 2, 2021 16:50:00").getTime();
const endDate = new Date("oct 4, 2021 16:49:00").getTime();

// display code whenever user login or
exports.getCode = async (req, res, next) => {
  try {
    let id = req.body.id;
    if (!id) return res.send("login required");
    else {
      User.findById(id).then((user) => {
        level = user.level;
        score = user.score;
        username = user.username;
        items = user.items;
        correct_count = user.correct_count;

        // //for second day

        // flag = user.flag;
        // if (flag === 0) {
        //   score = score + 50;
        //   level = 1;
        //   (items = [
        //     "fi",
        //     "if [ $sum -gt 400 ]; then",
        //     "else\necho 'B'",
        //     "echo 'Total marks : $sum '",
        //     "if [ $sum -gt 300 ]; then",
        //     "fi\nelse\necho 'F'",
        //     "if [ $sum -gt 350 ]; then",
        //     "if [ $sum -gt 200 ]; then",
        //     "if [ $sum -gt 250 ]; then",
        //     "echo 'Grade : '",
        //     "echo 'S'",
        //     "fi\nelse\necho 'D'",
        //     "if [ $sum -gt 450 ]; then",
        //     "echo 'A'\nfi",
        //     "echo 'C'",
        //     "fi\nelse",
        //     "fi\nelse\necho 'E'",
        //     "else",
        //   ]),
        //     User.findByIdAndUpdate(
        //       id,
        //       {
        //         score: score,
        //         level: level,
        //         items: items,
        //         updation_date: new Date(),
        //         flag: 1,
        //       },
        //       { new: true }
        //     ).then((users) => {
        //       return res.send("updated successfully");
        //     });
        // }

        var now = new Date().getTime();
        if (startDate - now > 0) return res.send("Game not started yet");
        else if (endDate - now <= 0) {
          return res.send("Game end");
        } else if (level > 30) {
          return res.send("Game Over");
        } else {
          if (score == 0) return res.send("Game Over");
          ele = {
            items: items,
            level: level,
            score: score,
            username: username,
          };
          return res.json(ele);
        }
      });
    }
  } catch (err) {
    next(err);
  }
};

// submit operation
exports.check = async (req, res, next) => {
  try {
    let id = req.body.data.id;
    let items = req.body.data.items;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    User.findById(id).then((user) => {
      level = user.level;
      score = user.score;
      correct_count = user.correct_count;
      username = user.username;
      day = 1;
      if (startDate - now > 0) return res.send("Game not started yet");
      else if (endDate - now < 0) return res.send("Game end");
      Ques.find({ level, day }, { _id: 0, code: 1, order: 1 }).then(
        (elements) => {
          if (
            // if user has ordered code correctly
            JSON.stringify(req.body.data.items) ==
            JSON.stringify(elements[0].order)
          ) {
            level++;
            correct_count++;
            score = score + 100;
            User.findByIdAndUpdate(
              id,
              {
                level: level,
                score: score,
                correct_count: correct_count,
                updation_date: new Date(),
              },
              { new: true }
            ).then((user) => {
              level = user.level;
              if (level > 30) {
                return res.send("Game Over");
              } else {
                Ques.find({ level, day }, { _id: 0, code: 1 }).then(
                  (element) => {
                    var items = element[0].code;
                    User.findByIdAndUpdate(
                      id,
                      { items: items, updation_date: new Date() },
                      { new: true }
                    ).then((users) => {
                      return res.send("updated successfully");
                    });
                  }
                );
              }
            });
          } else {
            // else user has ordered code wrongly
            score < 10 ? (score = 0) : (score = score - 10);
            User.findByIdAndUpdate(
              id,
              { score: score, updation_date: new Date(), items: items },
              { new: true }
            ).then((user) => {
              return res.send("updated successfully");
            });
          }
        }
      );
    });
  } catch (err) {
    next(err);
  }
};

// skip button
exports.skip = async (req, res, next) => {
  try {
    let id = req.body.data.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    else if (startDate - now > 0) return res.send("Game not started yet");
    else if (endDate - now < 0) return res.send("Game end");
    else {
      day = 1;
      User.findById(id).then((user) => {
        level = user.level;
        // score = user.score;
        username = user.username;
        level++;
        score < 20 ? (score = 0) : (score = score - 20);
        Ques.find({ level, day }, { _id: 0, code: 1 }).then((element) => {
          var items = element[0].code;
          User.findByIdAndUpdate(
            id,
            {
              score: score,
              level: level,
              items: items,
              updation_date: new Date(),
            },
            { new: true }
          ).then((users) => {
            return res.send("updated successfully");
          });
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

// rule and error page
exports.getrule_errorpage = async (req, res, next) => {
  try {
    let id = req.body.id;
    if (!id) return res.send("login required");
    else {
      User.findById(id).then((user) => {
        score = user.score;
        username = user.username;
        ele = {
          score: score,
          username: username,
        };
        return res.json(ele);
      });
    }
  } catch (err) {
    next(err);
  }
};

// when game is not started
exports.getstart = async (req, res, next) => {
  try {
    let id = req.body.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    else if (startDate - now <= 0) return res.send("Game Started");
    else if (endDate - now < 0) return res.send("Game end");
    else {
      User.findById(id).then((user) => {
        score = user.score;
        username = user.username;
        ele = {
          score: score,
          username: username,
        };
        return res.json(ele);
      });
    }
  } catch (err) {
    next(err);
  }
};

// thank you page
exports.getthankyoupage = async (req, res, next) => {
  try {
    let id = req.body.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    else {
      User.findById(id).then((user) => {
        level = user.level;

        score = user.score;
        if (startDate - now > 0) return res.send("Game not started yet");
        else if (level <= 30 && endDate - now > 0 && score != 0)
          return res.send("Game Not Over yet");
        score = user.score;
        username = user.username;
        ele = {
          score: score,
          username: username,
        };
        return res.json(ele);
      });
    }
  } catch (err) {
    next(err);
  }
};