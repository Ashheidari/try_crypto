const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/userController");

const router = express.Router();

router.put(
  "/signup",
  [
    check("name")
      .notEmpty()
      .withMessage("name is required")
      .trim()
      .toLowerCase(),
    check("lastname")
      .notEmpty()
      .withMessage("lastname is required")
      .trim()
      .toLowerCase(),
    check("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("Enter a valid email address"),
    check("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("password must at least 6 char"),
    check("confirmpassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("passwords need to match");
      } else {
        return true;
      }
    }),
  ],
  userController.signupUser
);

router.post(
  "/login",
  [
    check('email')
      .normalizeEmail()
      .isEmail()
      .withMessage("Enter a valid email address"),
    check('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage("password must at least 6 char"),
  ],
  userController.loginUser
);

router.post("/pay", userController.payUser);

module.exports = router;
