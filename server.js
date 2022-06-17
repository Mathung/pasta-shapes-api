const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

MongoClient.connect('mongodb+srv://Matthung:EINZm8oa26LRSVSl@cluster0.t7zaa.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('pasta');
    const pastaCollection = db.collection('pasta-shapes');

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.get('/js/main.js', (req, res) => {
        res.sendFile(__dirname + '/js/main.js')
    })

    app.get('/add', (req, res) => {
        res.sendFile(__dirname + '/add.html')
    })

    app.get('/js/main.js', (req, res) => {
        res.sendFile(__dirname + '/js/main.js')
    })

    app.get('/css/style.css', (req, res) => {
        res.sendFile(__dirname + '/css/style.css') //being lazy and only using one stylesheet for all pages
    })

    app.get('/randomPasta', (req, res) => {
        pastaCollection.find().toArray()
            .then(results => {
                console.log(results)
                res.json(results)
            })
            .catch(err => {
                console.error(err)
            })
    })

    app.post('/update', (req, res) => {
        pastaCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
            })
            .catch(err=> {
                console.error(err)
            })
        res.redirect('/add'); //reload the page after submit
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log('server is running')
    }) 
})


//pw EINZm8oa26LRSVSl