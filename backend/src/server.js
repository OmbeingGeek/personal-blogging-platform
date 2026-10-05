require("dotenv").config();
const app = require("./app");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

mongoose

.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.error("Error occured",err);
});

app.listen(PORT,()=>{
    console.log(`App is listening to the port ${PORT}`);
});