// Task 4: Middleware
// Question: Write a middleware function that logs the HTTP method and URL of every incoming request. 
// Then, apply this middleware to your Express app.
// Summary: Your task is to implement a custom middleware that logs the HTTP method (GET, POST, etc.) 
// and the URL for each request before passing control to the next middleware or route handler.

var express=require("express")
var app=express()

function mid(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
    
}
app.use(mid);
app.get("/",(req,res)=>{
    res.send("hi");
});
app.post("/1",(req,res)=>{
    res.send("post req of 1")
});
app.listen(3211,()=>{
    console.log("server is running");
    
});