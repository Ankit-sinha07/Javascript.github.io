//----------------------------------ELEMENT-1---------------------------------------//

let element1 = document.createElement('li')
let text = document.createTextNode('This is a Text Node')
element1.appendChild(text)

//Add a class name to the li element
element1.className = 'childul1'

//Add a id name to the li element
element1.id = 'createdli1'

//Add a class name to the li element
//element.setAttribute('title', 'mytitle')
//element.innerHTML = '<b>Hello this is Ankit and this is creaetd by Ankit Sinha</b>'


let ul = document.querySelector('ul.unord')
ul.appendChild(element1)
console.log(ul)
console.log(element1)


//-------------------------------ELEMENT-2-----------------------------------------------------//
let element2 = document.createElement('h3')
console.log(element2)

//id name to the li element
element2.id = 'createdli2'

//class name to the li element
element2.className = 'childul2' 

let txtNode = document.createTextNode('This is a created Node is for element2')
element2.appendChild(txtNode)

//replacing
element1.replaceWith(element2)
let myul = document.getElementById('myul')
myul.replaceChild(element1, document.getElementById('fli'))

//removeChild
//myul.removeChild(document.getElementById('lli'))

//let pr = element2.hasAttribute('id')//used for cheacking the attribute is there or not!
let pr = element2.getAttribute('id')
console.log(element2, pr)



















