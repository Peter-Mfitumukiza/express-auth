const express = require("express");
const { registerUser, getUsers } = require("../controller/auth.controller");

const router = express.Router();

router.post("/create-user", registerUser);
router.get("/all", getUsers);

module.exports = router;