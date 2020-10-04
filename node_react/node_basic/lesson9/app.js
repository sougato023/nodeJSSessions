//import and export
// console.log("Process: ",process)
//arrow functions
//object destructuring
//const {sum} = require("./helpers");

//core modeules and third party modules which are in node_modules can be loaded directly as shown below
//no need to give the path to node_modeules folder
// const http = require("http");

//npm is the largest world's software registry
//load modules from npm
//create a new pakage.jon by typing the command $=>npm init
//first install the package

//install nodemon by $=>npm install nodemon
//the dependencies will be maintained in the package.json

//go to package.json and in script section
//"scripts": {
//     "dev": "node app.js"
//   }
//then $=>npm run dev, //=>the output of app.js will be shown and the server will run now

//go to package.json and in script section
//"scripts": {
//     "dev": "nodemon app.js"
//   }
// const server = http.createServer((req, res) => {
//     res.write("Hello HTTP Server changed");
//     res.end();
// });
// server.listen(3000);

//install express
//$=>npm install express or $=>np i express
//now run $=>npm run dev
// const {sum} = require("./helpers");
// const total = sum( 4, 300);

// console.log("Total = "+total);

//now use express
// const express = require("express");

// const app = express();
// //get btakes 2 arguements 
// //1. url 
// //2. function= takes 2 parameters request and respone
// app.get("/about",(req, res) => {
//     res.send("Hello! Runnng express is awesome");
// });
// app.listen(3000);


//********************************************************************* */
                //nodejs event loop

//********************************************************************* */
//1.Thisnk of node js as  process that never stops
//2.It is like aflour machine that never stops
//3.you  throw rice- it grinds and gives you rice flour
//4. you throw corn- it grinds and gives you corn flour
//5.it keeps rrunning adn does its jobas FIFO
//6.the difference is insted of throwing rice or corn , you throw events to node process
//call back function for long jobs
//nodej is single threaded. This doesn't impact performance.
//As nodejs depends on non-blocking input/output systems

const fs = require("fs");

const fileName = "target.txt";

fs.watch(fileName, () => {
     console.log(`File Changed!`);
});

//run $=>node app.js
//go to target.txt and press save the log statement is printed in console
