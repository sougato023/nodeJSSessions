//Create a package.json file by typing the following command
// npm init
//use express to create server
//install express $=>npm i express
//once we install the node_modules folder is created in the project
//install nodemon $=>npm i nodemon

// //create server using express
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello Node API");
// });


// //app.listen(3000);

// //we can assign port as a variable and a callback function as below
// const port = 3000;

// app.listen(port, () => {
//     console.log(`A Node js API isnlistening on port: ${port}`)
// });

/* ****************************************************************************************


                            Seperating routes

*******************************************************************************************/


// //create server using express
// const express = require("express");
// const app = express();

// // //bring in the routes
// // const postRoutes = require("./routes/post");
// // app.get("/", postRoutes.getPost);

// //bring in the routes with object destructuring
// const {getPost} = require("./routes/post");
// app.get("/", getPost);


// //app.listen(3000);

// //we can assign port as a variable and a callback function as below
// const port = 3000;

// app.listen(port, () => {
//     console.log(`A Node js API isnlistening on port: ${port}`)
// });

/* ****************************************************************************************


                            Middleware explained

*******************************************************************************************/

// //create server using express
// const express = require("express");
// const app = express();

// // //my own middleware
// // //the process continues in the middleware
// // const my_middleware = () => {
// //     console.log("My middleware defined");
// // };
// //my own middleware
// //the process continues in the middleware.
// //to fix it we need to pass the next parameter in the function and inside the funcion should call next()
// const my_middleware = (req, res, next) => {
//     console.log("My middleware defined");
//     //the process goes to next execution phase
//     next();
// };

// //install morgan => helps to see the route paths
// //npm i morgan
// // morgan works as a middleware
// const morgan = require("morgan");

// // //bring in the routes
// // const postRoutes = require("./routes/post");
// // app.get("/", postRoutes.getPost);

// //bring in the routes with object destructuring
// const {getPost} = require("./routes/post");

// //middle ware
// //in the middle of start and end, in between you want to log or validate or authenticate
// app.use(morgan("dev"));

// //apply y midleware
// //the process continues in the middleware
// app.use(my_middleware);

// app.get("/", getPost);



// //app.listen(3000);

// //we can assign port as a variable and a callback function as below
// const port = 3000;

// app.listen(port, () => {
//     console.log(`A Node js API isnlistening on port: ${port}`)
// });

/* ****************************************************************************************


                            Using controllers

*******************************************************************************************/

//create server using express
const express = require("express");
const app = express();

// //my own middleware
// //the process continues in the middleware
// const my_middleware = () => {
//     console.log("My middleware defined");
// };
//my own middleware
//the process continues in the middleware.
//to fix it we need to pass the next parameter in the function and inside the funcion should call next()
const my_middleware = (req, res, next) => {
    console.log("My middleware defined");
    //the process goes to next execution phase
    next();
};

//install morgan => helps to see the route paths
//npm i morgan
// morgan works as a middleware
const morgan = require("morgan");

// //bring in the routes
// const postRoutes = require("./routes/post");
// app.get("/", postRoutes.getPost);

//bring in the routes with object destructuring
const postRoute = require("./routes/post");

//middle ware
//in the middle of start and end, in between you want to log or validate or authenticate
app.use(morgan("dev"));

//apply y midleware
//the process continues in the middleware
app.use(my_middleware);

app.use("/", postRoute);



//app.listen(3000);

//we can assign port as a variable and a callback function as below
const port = 3000;

app.listen(port, () => {
    console.log(`A Node js API isnlistening on port: ${port}`)
});