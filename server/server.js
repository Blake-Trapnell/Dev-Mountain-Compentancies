require('dotenv').config()
const express = require('express')
const massive = require('massive')
const foodsCtrl = require('./controllers/foodscontroller.js')
const  {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const PORT = SERVER_PORT || 4311
const app = express()
app.use(express)

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json())

app.get('/api/foods', foodsCtrl.getFoods)


massive(CONNECTION_STRING).then(db=> {
    app.set('db',db)
    app.listen(PORT, ()=> console.log(`^.^ Welcome to ${PORT}`))
}).catch(error => console.log('error connection to DB', error))