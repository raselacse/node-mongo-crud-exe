const express = require('express')
const app = express()
const port = 3000

const password = "oGwFfVUWCZBrI5zK";

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:oGwFfVUWCZBrI5zK@cluster0.muahx.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  console.log('database connected');
  client.close();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})