var func1 = (x) => {
    //console.log(x)
    var rez = []
    for (let i of x){
        if (Object.keys(i).length === 1){
            //console.log(i)
            rez.push(i)
        }

    }
    return rez

}

console.log(func1([ { 1: "A" }, { 1: "C", 2: "A" }, {2:"C"}]))


var func2 = (x) => {
    //console.log(x)
    var pola = parseInt(x.length/2)
    //console.log(pola)
    var rez = x.slice(pola,)
    return rez

}


console.log(func2("Javascript i nije tolko los"))

var func3 = (x) => {
    var brojevi = []
    var stringovi = []

    for (let i of x){

        console.log(i)
        if(typeof i === "number"){
            brojevi.push(i)
        }
        else{
            stringovi.push(i)
        }

    }

    brojevi.sort((a, b) => a - b)
    console.log(brojevi)
    stringovi.sort((a, b) => a.length - b.length)
    console.log(stringovi)
    var res = brojevi.concat(stringovi)
    return res
}


console.log(func3([321,63,"Mermelada",4,"Kruh",1,1234,"Tanjur",50]))


var func4 = (x) => {
    for (let i in x){
        var arrTemp = []
        if (Array.isArray(x[i])){
            var sum = 0
            for (let j of x[i]){

                if(typeof j === "number"){
                    sum += j
                }
                else{
                    arrTemp.push(j)
                }
            }
            if (sum%2==0){
                sum = (sum**0.5).toFixed(2)
                console.log(sum)
                arrTemp.push(sum)
            }
            x[i] = arrTemp
        }
    }
    return x
}

console.log(func4({ 1: [ 143, "A", 21 ], 2: "B", 3: [ 12, 11, "C" ] }))


var func5 = (x) => {
    var temp = x.split(" ")
    console.log(temp)
    var temp2 = []
    for (let i of temp){
        console.log(temp.indexOf(i))
        if (temp.indexOf(i) === 0){
            temp2.push(i)
            continue
        }
        var prvo = i.charAt(0).toUpperCase()
        var drugo = i.slice(1,)
        var kraj = prvo+drugo
        temp2.push(kraj)
    }
    //console.log(temp2.join(""))
    return temp2.join("")


}

console.log(func5("web apps vjezbe"))
