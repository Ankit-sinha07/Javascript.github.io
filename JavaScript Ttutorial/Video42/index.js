console.log("This JS is for Symbols in JavaScript")

// Symbols
const sym1 = Symbol("This is My Symbol identifier")
const sym2 = Symbol("This is My Symbol identifier")
//console.log('symbol is', sym1)
//console.log('Type of Symbol is ', typeof sym1)

console.log(sym1 === sym2)

const a = "This is same"
const b = "This is same"
console.log(a === b)
console.log(null === null)
console.log(undefined === undefined)

const k1 = Symbol('identifer for k1')
const k2 = Symbol('identifer for k2')

myObj ={}
myObj[k1] = 'Ankit Kumar Sinha'
myObj[k2] = 'Harry'
myObj["name"] = "ANKIT KUMAR SINHA"

console.log(myObj)
console.log(myObj[k1])
console.log(myObj[k2])

//Symbols are Ignored in loops

for(key in myObj){
    console.log(key, myObj[key])
}