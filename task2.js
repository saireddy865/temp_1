// Task 2: Route Parameters
// Question: Create an Express route that accepts a route parameter id and responds with a message containing the id value.
//  Summary: You should define a route like /user/:id where id is a route parameter, 
//  and return a response that includes the id in the message.


var express=require("express")
var app=express()
app.get("/:id",(req,res)=>{
    res.send(`hello , my userid : ${req.params.id}`)

});
app.listen(3100,()=>{
    console.log("server is started")
});