const express = require("express");
const router = express.Router();
const {
  handleGetLogin,
  handleGetSignUp,
  handlePostLogin,
  handlePostSingup,
  handleLogout,
} = require("../controllers/authController");

router.get("/signup", handleGetSignUp);
router.post("/signup", handlePostSingup);
router.get("/login", handleGetLogin);
router.post("/login", handlePostLogin);
router.get("/logout", handleLogout);

module.exports = router;
