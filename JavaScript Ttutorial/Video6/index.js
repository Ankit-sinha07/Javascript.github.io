const name = 'Ankit'
const Greeting = 'Good Morning'
console.log(name + ' ' + Greeting)

let html
html = "<h1>This is a HEADING</h1>"+
       "<p>This is a PARAGRAPH</p>"


//----------Templet Litreal-----------
let fruit1 = 'Orange'
let fruit2 = 'Apple'
let myHtml = `Hello ${name}
<h1>THIS IS Video 6</h1>
<p>YOU LIKE ${fruit1} and ${fruit2}</p>`
document.body.innerHTML = myHtml

//----------------concat--------------------       
html = html.concat('this', '-str2')
//console.log(html)

//----------------toLowerCase()-------------
console.log(html.toLowerCase())        
//console.log(html)

//----------------toUpperCaseCase()-------------
console.log(html.toUpperCase())      
//console.log(html)

//---------------------
//console.log(html[1])

//-----------------IndexOf()------
console.log(html.indexOf('This'))

//--------------LastIndexOf()-----
console.log(html.lastIndexOf('<'))

//--------------CharAt()-----
console.log(html.charAt(1))

//--------------endsWith()-----
console.log(html.endsWith('str2'))

//--------------includes()-----
console.log(html.includes('is'))

//--------------substring(0-----
console.log(html.substring(0,4 ))

//--------------slice()-----
console.log(html.slice(0,5))

//--------------split()-----
console.log(html.split(" "))

//--------------replace()-----
console.log(html.replace('This', 'Hello'))
