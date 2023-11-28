const express = require("express");
const router = express.Router();
const authActions = require("../actions/auth.action");

router.post("/register", authActions.register);
router.post("/login", authActions.login);

module.exports = router;
