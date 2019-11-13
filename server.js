var express= require("express");
var app=express();

app.get("/",function(request,response){
    response.send("welcome");
})

app.listen(4000,function(err,res){
    res.send("hi");
})