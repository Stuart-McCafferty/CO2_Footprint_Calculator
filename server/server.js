const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });
  