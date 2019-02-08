var express=require('express');
var app=express();


app.get('/getPranav', function(request,response){
   response.send({name:"Pranav", instrument:"Guitar"});
});
app.get('/getLawrence', function(req,res){
   response.send({name:"Lawrence", instrument:"Drums"});
});

app.listen(9000,function(){
   console.log("server started");
})
