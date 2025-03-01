var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send(`Hello,welcome to my world mr/mrs ${req.query.name}`)

});
app.listen(3044,()=>{
    console.log("server has started")
});