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
const {getPost,createPost} = require("../controllers/post");
const validator = require("../validators/index");

const  router = express.Router();
router.get("/",getPost);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;


