const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
  },
  profile_pic: {
    type: String
  },
  linkedIn_link:{
    type: String
  },
  gitHub_link:{
    type:String
  },
  resume:{
    type: String
  },
  ProjectName: {
    type: String
  },
  ProjectDescription: {
    type:String
  },
  isSolo: {
    type :Boolean
  },
  projectLink:{
    type: String
  },
  isInternShip: {
    type: Boolean
  },
  companyName: {
    type: String,
  },
  companyWebsiteLink:{
    type: String
  },
  startDate:{
    type:Date
  },
  endDate:{
    type:Date
  },
  coverlatter:{
    type:String
  },
  points:{
    type:Number,
    default: 0
  },
  OTP: { type: String },
  OTPCreatedTime: { type: Date },
  OTPAttempts: { type: Number, default: 0 },
  isBlocked: { type: Boolean, default: false },
  blockUntil: { type: Date },
});

module.exports = mongoose.model('Users', UserSchema);