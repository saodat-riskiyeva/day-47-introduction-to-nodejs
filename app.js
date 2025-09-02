const express = require("express");

const app = express();

// http://localhost:3000/currenttime
app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

// http://localhost:3000/
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000);

// function handleRequest(request, response) {
//   // http://localhost:3000/
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

// amazon.com
// amazon.com:80
