const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//use bP and .json()

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function(){
    console.log("Server started");
});

module.exports = {app};