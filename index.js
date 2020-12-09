require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controllers')

const app = express ()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
}).then((dbInstance)=>{
    console.log('DB ready!')
    app.set('db',dbInstance)
    app.listen(SERVER_PORT,()=> {
        console.log(`running PORT ${SERVER_PORT}`)
    })
})

app.get('/products',ctrl.getAll)
app.get('/products/:id',ctrl.getOne)
app.post('/products',ctrl.create)
app.put('/products',ctrl.update)
app.delete('/products/:id',ctrl.delete)
    


