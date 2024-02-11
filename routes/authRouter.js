const express = require("express");
const { checklogin,otpGenarator } = require("../controller/authController");
const router = express.Router();

router.post("/generate",otpGenarator);
router.post("/login",checklogin)

module.exports=router;