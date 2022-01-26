//----------Peimitive Data types---------

//String
let name = "Ankit"
console.log("My string is "+name)
console.log("Data type is " +(typeof name))

//Number
let marks1 = 800
console.log("Data type is " + (typeof marks1))

//Boolean
let Drive = true
console.log("Data type is "+ (typeof Drive))

//Null
let nullVar = null 
console.log("Data type is " +(typeof nullVar))

//Undefined
let undef = undefined
console.log("Data type is " +(typeof undef))


//----------Reference Data types---------
//---array
myarr = [1,2,55,45]
console.log("Data type is " +(typeof myarr))

//---Object literals
let StMarks2 = {
    Ankit: 900,
    Shubham: 600,
    Rohan: 500
}
//console.log(StMarks2)
console.log("Data type is " + (typeof StMarks2));


//---function
function findName(){
        console.log("ANKIT KUMAR SINHA")
}
console.log(findName);

//---Date
let date = new Date()
console.log(typeof date)
