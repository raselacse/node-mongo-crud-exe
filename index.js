const express = require('express')
const app = express()
const port = 3000

const password = "oGwFfVUWCZBrI5zK";
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:oGwFfVUWCZBrI5zK@cluster0.muahx.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

client.connect(err => {
    const productCollection = client.db("organicdb").collection("products");
    app.post("/addProduct", (req, res) => {
        const product = req.body;
        productCollection.insertOne(product)
            .then(function (result) {
                console.log('success');
                res.send('success');
            })

    });
    //   client.close();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})