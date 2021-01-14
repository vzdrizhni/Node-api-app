const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use('/feed', feedRoutes);

mongoose
  .connect('mongodb+srv://vzd:1@cluster0.8frdi.mongodb.net/messages')
  .then(result => {

  })
  .catch(err => console.log(err));
app.listen(8080);