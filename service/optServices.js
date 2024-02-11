const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const generateOTP = () => {
  return crypto.randomBytes(3).toString("hex");
};

const sendOTP = (email, OTP) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SERVICE_USER,
      pass: process.env.EMAIL_SERVICE_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVICE_USER,
    to: email,
    subject: "Your OTP",
    text: `Your OTP is: ${OTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ( res, token ) => {
  // console.log("attaching cookies");

  const oneDay = 1000 * 60 * 60 * 24;
 // console.log(res);

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    sameSite: 'None'
  });
  //console.log(res);
};

module.exports = { generateOTP, sendOTP,attachCookiesToResponse,isTokenValid };