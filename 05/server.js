import express from 'express'

import bodyParser from "body-parser"
import connect from './db.js'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/voce', async (req, res) => {
    let db = await connect() 
    let cursor = await db.collection("collection1").find()
    let results = await cursor.toArray()
    res.json(results)
})

app.listen(port, () => console.log(`Works on port ${port}`))
