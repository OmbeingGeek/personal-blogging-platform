const express = require("express");

const app = express();
app.use(express.json());

const postRouter = require("./routes/postRoutes");

app.get("/api/health",(req,res)=>{
    res.send("Server is running");
});

app.use("/api/posts",postRouter);

module.exports = app;