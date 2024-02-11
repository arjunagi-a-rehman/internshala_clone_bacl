const { log } = require("console");
const User = require("../modules/Users");

async function addDetials(email,userData){
  const {name,profile_pic,linkedIn_link,gitHub_link,resume,ProjectName,ProjectDescription,isSolo,projectLink,isInternShip,companyName,companyWebsiteLink,startDate,endDate,coverlatter}=userData;
  const user=User.findOne({email:email});

  let earned=0;
  if(!user.name && name){
    
    earned+=2;
  }
  if(!user.profile_pic && profile_pic){
    earned+=5;
  }
  if(!user.linkedIn_link&&linkedIn_link){
    earned+=3;
  }
  if(!user.gitHub_link&&gitHub_link){
    earned+=5;
  }
  if(!user.resume&&resume){
    earned+=20;
  }
  if(!user.ProjectName&&ProjectName){
    earned+=5;
  }
  if(!user.ProjectDescription && ProjectDescription){
    earned+=6;
  }
  if(!user.isSolo&&isSolo){
  earned+=4
  }
  if(!user.projectLink&&projectLink){
    earned+=10;
  }
  if(!user.isInternShip&&isInternShip){
    earned+=5;
  }
  if(!user.companyName&&companyName){
    earned+=10;
  }
  if(!user.companyWebsiteLink&&companyWebsiteLink){
    earned+=10;
  }
  if(!user.startDate&& startDate){
    earned+=2;
  }
  if(!user.endDate && endDate){
    earned+=2;
  }
  if(!user.coverlatter&&coverlatter){
    earned+=20;
  }
  let toUpdate = {};
  for (const key in userData) {
      if (userData[key]) {
          toUpdate[key] = userData[key];
      }
  }
  console.log(toUpdate,user.points+earned);
  toUpdate["points"]=user.points?user.points+earned:earned;
  const existingUser = await User.findOneAndUpdate(
    { email: email }, // Assuming email is unique
    { $set: toUpdate },
    { new: true }
  );
  return existingUser;
}

async function jobApllication(email){
  const user=await User.findOne({email:email});
  console.log(user.points);
  if(user.points>50){
    user.points-=50;
  }else{
    throw new Error("in sufficient balance");
  }
  await user.save();
  return user;
}

module.exports={
  addDetials,
  jobApllication
}