const http = require('http');

http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json")  //telling the webserver that the response data is in JSON format
    response.write(JSON.stringify({ name:"Suresh", age: "30" }));
    response.end();
}).listen(3333);

