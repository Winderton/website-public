const express = require('express')
const next = require('next')
const fs = require('fs');
const https = require('https');

const cert = fs.readFileSync('./backend/ssl/wndtn_com.crt');
const ca = fs.readFileSync('./backend/ssl/wndtn_com.ca-bundle');
const key = fs.readFileSync('./backend/ssl/wndtn_com.key');

const server = express();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const hostname = 'wndtn.com';
const httpsport = 443;

let options = {
  cert: cert, 
  ca: ca, 
  key: key
};


const httpsServer = https.createServer(options, server);

app.prepare().then(() => {

  httpsServer.get('/api/show', (req, res) => {
    return res.end("rendered on the server");
  })

  httpsServer.all('*', (req, res) => {
    return handle(req, res)
  })

  httpsServer.listen(httpsport, hostname);
})

 