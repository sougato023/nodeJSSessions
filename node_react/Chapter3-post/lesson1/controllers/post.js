const Post = require("../models/post");

exports.getPost = (req, res) => {
    res.json({
        post:[
            {title:"First Post"},{title:"Second Post"}
        ]
    });
};

//install json viewer extension to view the json

//create post
exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("Creating post: "+post);
    console.log("Creating post: ", req.body);//this will give undefined as express cannot parse the body

    //need to use bodyparser

    //save the post to database
    post.save((err, result) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        } else{
             res.status(200).json({
                post:result
            });
        }
    })
}