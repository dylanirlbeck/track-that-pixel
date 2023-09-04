const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const html = fs.readFileSync("index.html", "utf8");
  console.log("Server received request!");
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
