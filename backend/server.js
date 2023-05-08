//Express js imported
const express = require('express') //express library import

//import mongoose ODM to connect mongo db
const mongoose = require('mongoose'); //for connect to mongo db

const bodyParser = require('body-parser') //bodyParser is an middleware that inbetween front-end and Backend(database) data handling
const app = express()
const port = 8000

//CORS package
const cors = require('cors');

//Express data
const customerdata = require('../backend/routes/custroute')



//db connection
//mongoose through database connectivity code here,-
//we can use any db name - here i used "mymerncustomerdb"
mongoose.connect('mongodb://127.0.0.1:27017/mymerncustomerdb')
  .then((x) => {    //.then -disply the message when db connecting Succesfully.
    console.log('Succesfully Connected to Mongo Database Called :', x.connections[0].name)
  })
  .catch((err) => { //.catch - comment is used to find the error that when database not connected .
    console.log("Error Connectiong to Mongo!!!!", err)
  })

//end of db connection code

//middleware - bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//use cors
app.use(cors())

//the url we need - 'localhost:8000/cust/create-customer'    so,
app.use('/cust',customerdata)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
