const http = require('http');

const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

if (require.main === module) {
  const server = http.createServer(handler);
  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
}

module.exports = handler;