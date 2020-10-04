//Create a package.json file by typing the following command
// npm init
//use express to create server
//install express $=>npm i express
//once we install the node_modules folder is created in the project
//install nodemon $=>npm i nodemon

//create server using express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node API");
});


//app.listen(3000);

//we can assign port as a variable and a callback function as below
const port = 3000;

app.listen(port, () => {
    console.log(`A Node js API isnlistening on port: ${port}`)
});