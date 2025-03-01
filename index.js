// Task 1: Query Parameters
// Question: Create an Express route that accepts a query parameter name and responds with a greeting message including the name. 
// Summary: You need to create a route /greet that extracts the name query parameter from the URL and responds with a personalized greeting.


var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send(`Hello,welcome to my world mr/mrs ${req.query.name}`)

});
app.listen(3044,()=>{
    console.log("server has started")
});