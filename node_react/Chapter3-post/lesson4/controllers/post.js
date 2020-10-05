const Post = require("../models/post");


exports.getPost = (req, res) => {
    //const posts = Post.find();
//method chaining
//we want only id, title,body
const post = Post.find()
.select("_id title body")
    .then((posts) => {
        res.json({
            posts: posts
        })
        
    }).catch(err => {
        console.log(err);
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
    // post.save((err, result) => {
    //     if(err){
    //         return res.status(400).json({
    //             error:err
    //         });
    //     } else{
    //          res.status(200).json({
    //             post:result
    //         });
    //     }
    // })
    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    });
}