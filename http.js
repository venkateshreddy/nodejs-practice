const http = require('http');


http.createServer((request,response) =>{
// console.log(request.body,request.params,request.query);
console.log(request.url);
response.setHeader("Content-Type","application/json")
response.write(JSON.stringify({ name:"srivani",age:"22" }));
response.end();
}).listen(2000);

http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json")  //telling the webserver that the response data is in JSON format
    response.write(JSON.stringify({ name:"Suresh", age: "30" }));
    response.end();
}).listen(3333);


