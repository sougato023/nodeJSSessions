//import and export
// console.log("Process: ",process)
//arrow functions
//object destructuring
const {sum} = require("./helpers");

//core modeules and third party modules which are in node_modules can be loaded directly as shown below
//no need to give the path to node_modeules folder
const http = require("http");

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
const server = http.createServer((req, res) => {
    res.write("Hello HTTP Server changed");
    res.end();
});
server.listen(3000);

const total = sum( 4, 300);

console.log("Total = "+total);


