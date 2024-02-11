const mongoose = require('mongoose');
const JobSchema=new mongoose.Schema(
  {
    title: {
      type: String
    },
    excerpt : {
      type: String
    },
    companyName: {
      type:String
    },
    minSalary:{
      Type: Number
    },
    maxSalary:{
      type:Number
    }
  }
)

module.exports=mongoose.model('Job',JobSchema);