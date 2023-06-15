const express = require('express');
const { createUser, loginUser } = require('../controllers/CreateUser');
const router = express.Router();


router.post("/register", (req, res) => {
    console.log("Reached /register endpoint");
    createUser(req, res)});
router.post("/login", loginUser);

module.exports = router;