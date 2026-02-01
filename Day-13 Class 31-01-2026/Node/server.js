const http = require("http");

const users=require("./userDetails");
const server = http.createServer((req, res) => {
  res.write("Hello Every one this is response");
  res.end();
});

users()

server.listen(5000, "localhost" ,() => {
  console.log("Server running port 5000");
});
