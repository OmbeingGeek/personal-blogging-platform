const express = require("express");

const app = express();

app.get("/api/health",(req,res)=>{
    res.send("Server is running");
});

module.exports = app;