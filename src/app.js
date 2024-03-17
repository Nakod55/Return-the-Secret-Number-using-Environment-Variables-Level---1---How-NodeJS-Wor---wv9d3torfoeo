const express = require('express');
const app = express();
app.use(express.json());
const {readFile}=require("fs");

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
   readFile("./.env",(err,data)=>{
          const num=data.toString()[7];
          res.send({number: num});
   })
});

module.exports = app;
