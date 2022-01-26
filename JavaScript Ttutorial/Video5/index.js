//Type conversion and type coercion

//---------Number-----------
let MyVar
MyVar = String(100)
MyVar = Number("100")
console.log(MyVar ,(typeof MyVar))

//----------Boolean Value----------
let BooleanVar = String(true)
console.log(BooleanVar, (typeof BooleanVar))

//---------Date Value---------------
let date = String(new Date())
console.log(date, (typeof date))

//---------Array Value---------------
let arr1 = String([1,2,3,4,5,6,7,8,9])
console.log(arr1.length, (typeof arr1))

//------------toString Function------------
let i = 200
console.log(i.toString())

//-------------Number Function-------------
let strNum = Number("123456789")//converts String Integer in Number Form
console.log(strNum,(typeof strNum))

//---------------ParseInt---------------------------
let number1 = parseInt('300') //changes String integer in Number Form
console.log(number1, (typeof number1))

//---------------ParseFloat---------------------------
let number2 = parseFloat('300.123') //changes String integer in Number Form and it also include decimal variable.
console.log(number2, (typeof number2))
//console.log(number2.toFixed(3), (typeof number2))// toFixed is used to show how my decimal number the Integer had.


//-------Type Coerction-----------
let Mystr = "123"
let MySum = 34
console.log(Mystr + MySum)