const express = require("express");
const { addUserDtails,applyJob } = require("../controller/userController");
const { authenticate } = require("../middleware/authenticate");
const router = express.Router();

router.post('/',authenticate,addUserDtails);
router.get('/job',authenticate,applyJob);

module.exports=router;