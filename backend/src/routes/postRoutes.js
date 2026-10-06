const express = require("express");
const POST = require("../models/Post");

const mongoose = require("mongoose");

const router = express.Router();

router.post("/",async (req,res)=>{
    const {title , content, author} = req.body;
    const post = new POST({
        title,
        content,
        author
    })
    await post.save();
    res.status(201).json(post);
});

router.get("/", async (req,res)=>{
    const posts = await POST.find();

    res.status(200).json(posts);
});

router.get("/:id",async (req,res) =>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: "Invalid post Id"});
    }

    const post = await POST.findById(id);

    if(!post){
        return res.status(404).json({message : "Post Not Found"});
    }

    res.status(200).json(post);
})

router.put("/:id", async (req,res)=>{
    const id = req.params.id;

    const {title, content, author} = req.body;

    if(!mongoose.Types.findById.isValid(id)){
        return res.status(400).json({message: "Invalid Post id"});
    }

    const post = await POST.findByIdAndUpdate(
        id,
        {title,content,author},
        {new: true}
    );

    if(!post){
        return res.status(404).json({message: "Post not found"});
    }

    res.status(200).json(post);
})

module.exports = router;