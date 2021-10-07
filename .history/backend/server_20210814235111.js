const express = require('express')
const next = require('next')
const path = require('path')


const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {

  
  const server = express();
  /*
  server.use(express.static(path.join(__dirname, '../out')));

  server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../out/index.html'));
  });
  */

  server.get('/api/show', (req, res) => {
    return res.end("Server side rendered");
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
  })
})