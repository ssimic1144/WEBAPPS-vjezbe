import express from "express
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []

app.get("/vratiSveKorisnike", (req,res) => {
    console.log(tempStorage)
    res.send(tempStorage)
})

app.post("/dodajKorisnika", (req, res) => {
    var data = req.body
    console.log(data)
    //var dataId = uuidv4()
    //data.id = dataId

    data = {... data, "id":uuidv4()}
    console.log(data)
    tempStorage.push(data)
    res.send(tempStorage)
})

app.patch("/urediKorisnika/:id", (req, res) => {
    var { id } = req.params
    console.log(id)
    var { godine } = req.body

    console.log(godine)
    var user = tempStorage.find((x) => x.id  == id)

    user.godine = godine
    console.log(user)

    res.send(tempStorage)

})

app.delete("/izbrisiKorisnika/:id", (req,res) =>  {
    var { id } = req.params 

    tempStorage = tempStorage.filter(x => x.id !== id)

    res.send(tempStorage)


})


app.listen(port, () => console.log(`Works on port ${port}`))
