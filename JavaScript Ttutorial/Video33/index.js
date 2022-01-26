console.log("This JS is for JavaScript Regular Expressio0n & Related Function");

let reg = /Ankit Kumar Sinha/; //This is a regualar expression literal in JS
//reg = /Ankit/g //g means Global expression literal in JS
//reg = /Ankit/i //i means case sensitive expression literal in JS

console.log(reg);
console.log(reg.source); //(.source) is used to Convert regular expression literal into string litral

let str =
  "This is Ankit Kumar Sinha (Chotan) and he is going to be the Richest Man in the World";
//Function to match expression

// 1-> exec() - This function will return an array for match and null for no match

let result1 = reg.exec(str)
console.log(result1) // We can use multiple exec() with global flag

//2-> test() - Returns true or false
let result2 = reg.test(str);
console.log(result2); // This will only print 'true' if the 'reg' is there in the string 'str'


//3-> match() - It will return an array of result or null
let result3 = str.match(reg)//This is the Syntax format of match()
console.log(result3)

//4-> search() - Returns index of first match or -1
let result4 = str.search(reg)
console.log(result4)

//5-> replace() - Returns new replaced string wiith all the replacements (if no flag is given, then first match will be replaced)
let result5 = str.replace(reg, 'ANKIT KUMAR SINHA')
console.log(result5)