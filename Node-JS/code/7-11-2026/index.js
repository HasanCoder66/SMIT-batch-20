// let value = "value";

// console.log(value);

const resSender = (res, message) => {
  return res.end(message);
};

const http = require("http");

const server = http.createServer((req, res) => {
  const endPoint = req.url;

  if (endPoint == "/") {
    resSender(res, "Welcome to shop");
  } else if (endPoint == "/website") {
    resSender(res, "Website service available hai..");
  } else if (endPoint == "/app") {
    resSender(res, "app service available hai..");
}else {
    res.writeHead(404)
    resSender(res, "go back to shop");
    
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("server is listening on port 5500");
});
