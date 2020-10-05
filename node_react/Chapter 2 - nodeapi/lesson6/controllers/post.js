exports.getPost = (req, res) => {
    res.json({
        post:[
            {title:"First Post"},{title:"Second Post"}
        ]
    });
};

//install json viewer extension to view the json