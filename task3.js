// Task 3: Headers and Body Parameters
// Question: Implement a POST route that accepts JSON data with a name field in the request body, 
// and a custom Authorization header. Respond with the received name and confirm the authorization.
// Summary: You need to create a POST route /submit that parses the request body and header, 
// and then sends back a confirmation message including both the name from the body and the Authorization header value.
 
var express=require("express");
var app=express();
app.use(express.json());
app.post("/submit",(req,res)=>{
    var name=req.body;
    var authHeader=req.headers["authorization"]
    res.send(`User name :${name.name} \n Token:${authHeader}`)
});
app.listen(3310,()=>{
    console.log("server has started")
});
