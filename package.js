const http= require ('http');
const { type } = require('os');
// console.log(http);

http.createServer((request,response) =>{
   //  console.log(request.body,  request.params,  request.query);
   response.setHeader("content-type","application/Json");
   response.write(JSON.stringify({"name":"sahana","age":"23","desgination":"Software Engineer"}));
   response.end();
}).listen(9000);
