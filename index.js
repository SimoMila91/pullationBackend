const express = require('express');
const mySql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
let port = process.env.PORT; 

if (port == null || port == "") {
  port = 3000; 
};

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.listen(port, () => { console.log(`Server started at port: ${port}`)});
