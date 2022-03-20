const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config()
const employeeRoute  = require('./routes/employee')


//DB connection
mongoose.connect(process.env.DATABASE).then(()=>{
  console.log("DB Connected");
}).catch(err => console.log(err));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", employeeRoute)



//Port
const port = process.env.PORT || 9000;

//starting a server
app.listen(port, ()=>{
  console.log(`app is running at ${port}`);
})