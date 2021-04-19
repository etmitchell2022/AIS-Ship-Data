require('dotenv').config();
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//Connect DB
const dburl = 'mongodb://localhost:27017';
const dbname = 'projectData';
const vesselCollection = 'vessels';
const aisCollection = 'ais';
const portCollection = 'ports';

//Initialize Middleware --Don't change
app.use(express.json({ extended: false }));

app.get('/api/vessels', async (req, res) => {
  const client = new MongoClient(dburl, {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const vessels = client.db(dbname).collection(vesselCollection);
    const test = await vessels.find().limit(500);
    res.send(test);
    client.close();
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000 || process.env.PORT, () => {
  console.log('Server is up and running');
});
