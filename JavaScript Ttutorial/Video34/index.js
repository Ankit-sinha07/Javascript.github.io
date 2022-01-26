console.log("This JS is for Regular Expressions - Metacharacters in JavaScript")

let regex = /CHOTAN/

let str = "CHOTAN is going to be the Richest man in the World and his name is CHOTAN believe in CHOTAN"
let result = regex.exec(str)
console.log(result)

if(regex.test(str)){
    console.log(`The String ${str} here matches the expression ${regex.source}`)
}

else{
    console.log(`The String ${str} here does not matches the expression ${regex.source}`)
}
