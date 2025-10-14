const express=require("express");
const app=express();

app.get("/apple",(req,res)=>{
    res.send("Apple is red color")

})
app.listen(4455,()=>{
    console.log("Server is started")
})