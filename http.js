const http = require('http');

http.createServer((request,response) =>{
// console.log(request.body,request.params,request.query);
console.log(request.url);
response.setHeader("Content-Type","application/json")
response.write(JSON.stringify({ name:"srivani",age:"22" }));
response.end();
}).listen(2000);