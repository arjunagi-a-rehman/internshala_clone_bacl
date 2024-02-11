const { addDetials,jobApllication } = require("../service/userDetails");
const { StatusCodes } = require('http-status-codes');
async function addUserDtails(req,res,next){
  try {
    const email=req.user.email;
    const user=await addDetials(email,req.body);
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
}

async function applyJob(req,res,next){
  try {
    const user = await jobApllication(req.user.email);
    res.status(StatusCodes.OK).json({user});
  } catch (error) {
    next(error);
  }
}

module.exports={addUserDtails,applyJob}