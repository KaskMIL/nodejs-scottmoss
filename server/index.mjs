import http from 'http';

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk
    })

    req.on('close', () => {
      const jsonB = JSON.parse(body);
      console.log(jsonB);
    })

    res.writeHead(201);
    res.end('ok');
  } else {
    res.writeHead(200);
    res.end('Hello world!')
  }
});

server.listen(port, host, () => {
  console.log(`Server running on ${host}:${port}`)
});
