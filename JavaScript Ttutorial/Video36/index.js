console.log("This JS is for Shorthand character classes (Regular Expressions)")

//Character Classes
let regex = /\whon/    //word charater - _ or alphabet or numbers.
//regex = /\w+1sfi/   // \w+ meansone or more word characters.
//regex = /\Wbhai/   //Non word character.
//regex = /\W+bhai/  //\W+ means more than one Non word Character.
//regex = /number \d9999999999/ // \d means digit
regex = /number \d+/ //\d means more than one digit



str = "Chotannn211sdfi bhai ka number 99999999"

let result = regex.exec(str)
console.log("The result form exec is", result)

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.soucre}`)
}
else{
    console.log(`The ${str} does not match the expression ${regex.source}`)
}