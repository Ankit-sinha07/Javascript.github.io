console.log("This JS is for Regular Expression - Character Set")

//const regex = /^C/


//const regex = /C[a-z]otan/ // Can be any Charater from a to z
//const regex = /C[hty]otan/ // Can be any Charater from h, t and y
//const regex = /C[^hty]otan/ // Cannot be any Charater from h, t and y
//const regex = /C[a-z]otan/  //For matching LowerCase (a to z) from UpperCase(A to Z)
const str = "Chotaan Bhai"

let result = regex.exec(str)
console.log("The Result from exec is", result)

if(regex.test(str)){
  console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}




