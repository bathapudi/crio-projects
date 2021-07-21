
const express = require('express')
// const bodyParser = require('body-parser');
// const url = require('url');
const querystring = require('querystring');
const app = express();
const port = 7050;

// http.get('/hello',function(req,res){
// return "hello world";
// });


app.get('/hello', (req, res) => {
    res.send('Hello World from "GET"')
  });

  app.get('/me', (req, res) => {
    res.send( req.query.name);
  });
  app.get('/me/hello', (req, res) => {
    res.send( req.query.name);
  });


  
  app.get('/me/hello/:name', (req, res) => {
    res.send("hello"+ req.params.name);
  });

  app.get('/me/:name', (req, res) => {
    res.send( req.params.name);
  });
  
  app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
  });