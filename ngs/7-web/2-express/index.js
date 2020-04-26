const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send("Main page");
});

server.get('/About', (req, res) => {
  res.send("About page");
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
