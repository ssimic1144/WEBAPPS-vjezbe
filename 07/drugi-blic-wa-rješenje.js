import express from 'express'

import bodyParser from "body-parser"
import connect from './db-blic.js'
import mongo from "mongodb"

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/saveItem', async (req, res) => {
    let db = await connect()
    let newData= req.body
    newData = newData.data.item
    let result = await db.collection('voce').insertOne(newData)
    if (result.insertedId){
        res.json({"status":"OK", "message":`Item ${newData.name} saved in DB`})

    }else{
        res.json({"status":"Failed"})
    }
})

app.get('/getBrand', async (req, res) => {
    let findBrand = req.query.brand
    let db = await connect()
    let doc = await db.collection('voce').find({ brand: findBrand})
    doc = await doc.toArray()
    if (doc){
        let response = []
        doc.forEach(x => {
            console.log("Item id :", x._id)
            response.push({"name":x.name,"price":x.price})
        })
        res.json({"status":"OK", "data":{"brand":findBrand,"items":response}})
    }
    else{
        res.json({"status":"Failed", "message":`Brand ${findBrand} not found in DB`})
    }
})

app.get('/getItemById', async (req, res) => {
    let id = req.query.id
    let db = await connect()
    let doc = await db.collection('voce').findOne({ _id: mongo.ObjectId(id)})
    if (doc){
        let result = {"name":doc.name, "price": doc.price, "brand":doc.brand}
        res.json({"status":"OK", "data":{"item":result}})
    }
    else{
        res.json({"status":"Failed"})
    }
    })

app.patch('/updateItemPrice', async (req, res) => {
    let data = req.body
    let toChange = {"price":data.newPrice}
    console.log(toChange)
    let id = req.query.id
    let db = await connect()
    let result = await db.collection('voce').updateOne(
        { _id: mongo.ObjectId(id) },
        {$set: toChange}
    )
    console.log(result)
    if (result.modifiedCount){
    res.json({
        "status":"OK",
        "message":`Item ${id} updated with new price ${toChange.price}`
        })
    }else{
        res.json({"status":"failed"})
    }

})


app.listen(port, () => console.log(`Works on port ${port}`))
