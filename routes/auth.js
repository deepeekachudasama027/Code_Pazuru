const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  getCode,check, skip, getdetails
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getCode").post(getCode);
router.route("/check").post(check);
router.route("/skip").post(skip);
router.route("/getdetails").post(getdetails)


module.exports = router;
