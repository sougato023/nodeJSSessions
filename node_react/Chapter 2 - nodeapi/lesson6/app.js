/* ****************************************************************************************


                            Database

*******************************************************************************************/
//npm install => dotenv
//install mongoose
//create server using express
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log("DB conected");
})

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
})


const my_middleware = (req, res, next) => {
    console.log("My middleware defined");
    //the process goes to next execution phase
    next();
};

const morgan = require("morgan");

//bring in the routes with object destructuring
const postRoute = require("./routes/post");

//middle ware
//in the middle of start and end, in between you want to log or validate or authenticate
app.use(morgan("dev"));

//apply y midleware
//the process continues in the middleware
app.use(my_middleware);

app.use("/", postRoute);


//we can assign port as a variable and a callback function as below
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`A Node js API isnlistening on port: ${port}`)
});