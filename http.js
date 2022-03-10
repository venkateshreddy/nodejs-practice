// const http= require ('http');
// const { type } = require('express');
// http.createServer((request,response) =>{
   //  console.log(request.body,  request.params,  request.query);
//    response.setHeader("content-type","application/Json");
//    response.write(JSON.stringify({"name":"sahana","age":"23","desgination":"Software Engineer"}));
//    response.end();
// }).listen(9000);


const express =require('express');
console.log(express);
const application=express();

application.get('/',function(req,res) {
  req.send('Hello Express')
})

application.listen(9000);