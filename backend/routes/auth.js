const express = require("express");
const router = express.Router();

const {
  login,
  register,
  getCode,
  check,
  skip,
  getthankyoupage,
  getrule_errorpage,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

router.route("/").get(login);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getCode").post(getCode);
router.route("/check").post(check);
router.route("/skip").post(skip);
router.route("/getrule_errorpage").post(getrule_errorpage);
router.route("/getthankyoupage").post(getthankyoupage);

module.exports = router;
