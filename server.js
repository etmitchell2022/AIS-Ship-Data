require('dotenv').config()
const express = require('express');
const app = express();

const connectDB = require('./database/connection');

//Connect DB --Generate URI through Studio 3T
connectDB();

//Initialize Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(4000 || process.env.PORT, () => {
  console.log('Server is up and running');
});
