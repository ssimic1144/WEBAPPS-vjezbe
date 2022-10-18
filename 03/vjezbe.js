const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var temp2 = [{id:1,student:"ivan"}, {id:2,student:"pero"}]
let handlerGet = (req,res) => {
    var data = req.query

    for (let i of temp2) {
        console.log(i["id"])
        console.log(data["id"])
        if (i["id"] === parseInt(data["id"])){
            console.log(data)

            res.json(i)
        }
    }


}

var temp = [{id:1,artikl:"Stol", cijena:123}, {id:2, artikl:"Stolica", cijena:321}]

let handlerGet2 = (req,res) => {
    var data = req.params


    for (let i of temp) {
        console.log(i["id"])
        console.log(data["id"])
        if (i["id"] === parseInt(data["id"])){
            console.log(data)

            res.json(i)
        }
    }
}

app.get("/student", handlerGet)
app.get("/artikl/:id", handlerGet2)

app.listen(port, () => console.log(`Works on port ${port}`))
