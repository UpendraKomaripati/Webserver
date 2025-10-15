const express=require("express");
const app=express();

app.get("/apple",(req,res)=>{
    res.send("Apple is red color")

})
app.get("/banana",(req,res)=>{
    res.send('Banana is a yellow color')
})
app.get("/guava",(req,res)=>{
    res.send("Guava is a green color")
})
app.get("/orange",(req,res)=>{
    res.send("Orange is a orange color")
})
app.listen(4455,()=>{
    console.log("Server is started")
})