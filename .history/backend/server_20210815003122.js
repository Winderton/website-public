const express = require('express')
const next = require('next')
const nodemailer = require('nodemailer')

require("dotenv").config();
/**
 const path = require('path')
 */

const server = express();

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
 });

 transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });

app.prepare().then(() => {



  /*
  server.use(express.static(path.join(__dirname, '../out')));

  server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../out/index.html'));
  });
  */

  server.get('/api/send', (req, res) => {
    return res.end("rendered on the server");
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
  })
})