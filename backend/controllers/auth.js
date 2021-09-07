const generateToken = require("../utils/generateToken.js");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Ques = require("../models/ques");

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
const startDate = new Date("Sep 7, 2021 16:40:00").getTime();
const endDate = new Date("Sep 7, 2021 18:05:00").getTime();


exports.getCode = async (req, res, next) => {
  try {
    let id = req.body.id;
    if (!id) return res.send("login required");
    else {
      User.findById(id).then((user) => {
        level = user.level;
        score = user.score;
        username = user.username; 
        var now = new Date().getTime();
        if (startDate - now > 0) return res.send("Game not started yet");
        else if (endDate - now <= 0) {console.log(1);return res.send("Game end"); }
        else if (level > 9) {
          return res.send("Game Over");
        } else {
          Ques.find({ level }, { _id: 0, level: 1, code: 1 }).then(
            (element) => {
              ele = {
                element: element[0],
                score: score,
                username: username,
              };
              console.log(2);
              return res.json(ele);
            }
          );
        }
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.check = async (req, res, next) => {
  try {
    let id = req.body.data.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    User.findById(id).then((user) => {
      level = user.level;
      score = user.score;
      username = user.username;
      if (startDate - now > 0) return res.send("Game not started yet");
      else if (endDate - now < 0) return res.send("Game end");
      Ques.find({ level }, { _id: 0, level: 1, code: 1, order: 1 }).then(
        (elements) => {
          if (
            JSON.stringify(req.body.data.items) ==
            JSON.stringify(elements[0].order)
          ) {
            level++;
            score = score + 100;
            if (level > 9) {
              User.findByIdAndUpdate(
                id,
                { level: 10, score: score },
                { new: true }
              ).then((user) => {
                return res.send("Game Over");
              });
            } else {
              User.findByIdAndUpdate(
                id,
                { level: level, score: score },
                { new: true }
              ).then((user) => {
                Ques.find({ level }, { _id: 0, level: 1, code: 1 }).then(
                  (element) => {
                    ele = {
                      element: element[0],
                      score: user.score,
                      username: user.username,
                    };

                    return res.json(ele);
                  }
                );
              });
            }
          } else {
            score < 10 ? (score = 0) : (score = score - 10);
            User.findByIdAndUpdate(
              id,
              { level: level, score: score },
              { new: true }
            ).then((user) => {
              Ques.find({ level }, { _id: 0, level: 1, code: 1 }).then(
                (element) => {
                  ele = {
                    element: element[0],
                    score: user.score,
                    username: user.username,
                  };

                  return res.json(ele);
                }
              );
            });
          }
        }
      );
    });
  } catch (err) {
    next(err);
  }
};

exports.skip = async (req, res, next) => {
  try {
    let id = req.body.data.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    else if (startDate - now > 0) return res.send("Game not started yet");
    else if (endDate - now < 0) return res.send("Game end");
    else {
      User.findById(id).then((user) => {
        level = user.level;
        score = user.score;
        username = user.username;
        level++;
        score < 50 ? (score = 0) : (score = score - 50);
        if (level > 9) {
          User.findByIdAndUpdate(
            id,
            { level: 10, score: score },
            { new: true }
          ).then((user) => {
            return res.send("Game Over");
          });
        } else {
          User.findByIdAndUpdate(
            id,
            { level: level, score: score },
            { new: true }
          ).then((user) => {
            Ques.find({ level }, { _id: 0, level: 1, code: 1 }).then(
              (element) => {
                ele = {
                  element: element[0],
                  score: user.score,
                  username: user.username,
                };

                return res.json(ele);
              }
            );
          });
        }
      });
    }
  } catch (err) {
    next(err);
  }
};

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
exports.getthankyoupage = async (req, res, next) => {
  try {
    let id = req.body.id;
    var now = new Date().getTime();
    if (!id) return res.send("login required");
    else {
      User.findById(id).then((user) => {
        level = user.level;
         if (startDate - now > 0) return res.send("Game not started yet");
       else  if (level <= 9 && endDate-now>0) return res.send("Game Not Over yet");
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
