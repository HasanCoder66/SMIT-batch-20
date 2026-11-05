const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/shoes") {
    res.end("yelo shoes");
  } else if (req.url == "/users") {
    res.end("all users fetched!");
  } else {
    res.end("hello from the server!");
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("server is listening on port 5500");
});
