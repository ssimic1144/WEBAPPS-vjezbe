import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []



app.get("/vratiAutore", (req,res)=>{
    var data = []
    
    for (let x of tempStorage){

        data.push({"naziv":x.naziv,"djela":x.djela})

    }
    console.log(data)
    res.json(data)
} )

app.post("/dodajAutora", (req,res) => {
    var data = req.body
    if (data.naziv && data.djela){
        console.log("OK")
        for (let i of data.djela){
            console.log(i)
            if (i.length > 20){
                res.json({"Error":`Djelo ${i} ima vise od 20 znakova`})
            }
            data = {... data, "id":uuidv4(), "datum":Date.now()}

            tempStorage.push(data)
            res.json({"Status":"ok"})
        }
    }
    else{
        res.json({"Error":"Krivi kljucevi"})
    }


})

app.delete("/izbrisiDjelo", (req,res) => {
   var data = req.body
    console.log(data)
    var autor = tempStorage.find((x) => x.naziv  == data.naziv)
    var ind = tempStorage.indexOf(autor)
    tempStorage = tempStorage.splice(ind,1)
    console.log(tempStorage)
    console.log(autor)
    var filter_djela = autor.djela.filter(x => x !== data.djelo)
    autor.djela = filter_djela
    console.log("---------------------------------------------------------")
    console.log("Filter : ", autor)
    console.log("New : ",tempStorage)
    res.json({"status":"ok"})
})

app.listen(port, () => console.log(`Works on port ${port}`))
