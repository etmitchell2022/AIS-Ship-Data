require('dotenv').config();
const express = require('express');
const cors = require('cors');
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
app.use(cors());

//Get array of ports and their coordinates
app.get('/api/ports', async (req, res) => {
  const client = new MongoClient(dburl, {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const data = client.db(dbname).collection(portCollection);
    const request = await data
      .find()
      .project({ _id: 1, port_location: 1, longitude: 1, latitude: 1 })
      .limit(150)
      .toArray();
    res.json(request);
    client.close();
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000 || process.env.PORT, () => {
  console.log('Server is up and running');
});
