const { isTokenValid } = require("../service/optServices");

async function authenticate(req,res,next){
  const token = req.signedCookies.token;
  if(!token){
    res.json("un autherized");
  }
  try {
    if (!token) {
      throw new Error("un-authenticated person");
    }
    const {email} = isTokenValid({ token });
  //  console.log("hello-----------3");
    req.user = { email};
    next();
  } catch (error) {
    next(error);
  }  
}

module.exports={
  authenticate
}