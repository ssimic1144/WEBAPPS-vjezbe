var x  = 1

console.log(x)

let it = "be"

console.log(it)

const at = 2

console.log(at)

var arr = [1,"at",4.32]

console.log(arr)

arr.push(4)

console.log(arr)

arr.pop()

console.log(arr)

for(let i of arr){
    console.log(i)
}

arr.push([1,2,3])
console.log(arr)


var arr = ["plavo",321,123,"crveno"]
var dict = {
    boje:["plavo","crveno"],
    broj:321

}

console.log(dict.broj)

for(let i in dict){
    console.log("Kljuc : ", i)
    console.log("Vrijednost : ",dict[i])
}

var func1 = function(x){
    console.log(x)
    return x/2
}


console.log(func1(15235123512))

const func2 = (x,y) => {
    return x+y
}

console.log(func2(123,321))

