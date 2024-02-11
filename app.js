const express = require('express')
var cors = require('cors')
require('dotenv').config();
const app = express()
const port = process.env.PORT||3000
const authRouter=require('./routes/authRouter');
const userRouter=require('./routes/userRoute');
const connectDb = require('./db/connect');
const cookieParser = require('cookie-parser');
const errorHandlerMiddleware = require('./middleware/error-handler');
console.log(process.env.JWT_SECRET,"jinsjqw");
const corsOptions = {
  origin: "https://anchorshub-iota.vercel.app", // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions))
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());
app.use(authRouter);
app.use('/user',userRouter); 

app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();