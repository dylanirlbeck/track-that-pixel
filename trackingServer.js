const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  const email = query.email;

  console.log("Tracking server received request with email", email);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(""); // TODO Will I need a proper image here?
});

server.listen(port, () => {
  console.log(`Tracking server is running on port ${port}`);
});
