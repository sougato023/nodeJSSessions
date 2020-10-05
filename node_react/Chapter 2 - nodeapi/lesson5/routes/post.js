// //move the routes
// const getPost = (req, res) => {
//     res.send("Hello Node API with routes");
// };

// module.exports = {
//     getPost: getPost
// };

//easy way to export
//move the routes
// exports.getPost = (req, res) => {
//     res.send("Hello Node API with routes changed");
// };

//calling teh controlers
const express = require("express");
const postControllers = require("../controllers/post");

const  router = express.Router();
router.get("/",postControllers.getPost);

module.exports = router;


