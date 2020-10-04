//import and export
// console.log("Process: ",process)
//arrow functions
//object destructuring
const {sum} = require("./helpers");

//core modeules and third party modules which are in node_modules can be loaded directly as shown below
//no need to give the path to node_modeules folder
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello HTTP Server");
    res.end();
});
server.listen(3000);

const total = sum( 4, 300);

console.log("Total = "+total);


