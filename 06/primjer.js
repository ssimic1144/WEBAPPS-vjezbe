import express from 'express'

import bodyParser from "body-parser"
import connect from './db.js'
import mongo from "mongodb"

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/voce/:id', async (req, res) => {
    let id = req.params.id
    let db = await connect()
    let doc = await db.collection('voce').findOne({ _id: mongo.ObjectId(id)})
    // res = await db.collection('voce').find()
    // resArray = res.toArray()
    if (doc){
        res.json({"status":"OK", "data":doc})
    }
    else{
        res.json({"status":"Failed"})
    }
    })

app.post('/voce', async (req, res) => {
    let db = await connect()
    let data= req.body
    let result = await db.collection('voce').insertOne(data)
    if (result.insertedId){
        res.json({"status":"OK", "message":`Fruit inserted with ${result.insertedId}`})

    }else{
        res.json({"status":"Failed"})
    }
})

app.patch('/voce/:id', async (req, res) => {
    let data = req.body
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('voce').updateOne(
        { _id: mongo.ObjectId(id) },
        {$set: data,}
    )
    res.json(result)
})

app.delete('/voce/:id', async (req,res) => {
    let id = req.params.id
    let db = await connect()
    let result = await db.collection('voce').deleteOne(
        {_id: mongo.ObjectId(id)}
    )
    if (result.deletedCount === 1){
        res.json({"status":"OK"})
    } else{
        res.json({"status":"Failed"})
    }


})

app.listen(port, () => console.log(`Works on port ${port}`))
