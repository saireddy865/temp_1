// Task 5: Combining Query and Route Parameters
// Question: Create an Express route that combines both route parameters and query parameters.
// For example, a route like /user/:id?age=:age that responds with the user's id and age from the query string.
// Summary: In this task, you need to handle a route that contains both a route parameter and a query parameter. 
// You will extract both the id from the route and the age from the query parameters and return them in the response.

var express=require("express")
var app=express()
app.use(express.json());
app.get("/user/:id",(req,res)=>{
    var id=req.params.id
    var age=req.query.age
    res.send(`hello the user id is ${id} and the age is ${age} from the data`)

});
app.listen(3210,()=>{
    console.log("server is running")
});