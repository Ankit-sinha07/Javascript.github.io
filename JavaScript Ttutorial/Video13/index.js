/*
There are two types of ELEMENT selector's
1-> single element selectors
2-> multi element selectors
*/

//1-> single element selectors
let element = document.getElementById('Myfirst')

//element = element.className //-Gives all the  class names
//element = element.childNodes
//element = element.parentNode //-Gives the parent class
element.style.color  = 'blue' // changes the color of the node
element.innerText = 'ANKIT IS A GREAT WEB DEVELOPER/PROGRAMMER' //Changes the text of the selected element
element.innerHTML = '<b>ANKIT IS A GREAT WEB DEVELOPER/PROGRAMMER</b>'
//console.log(element)

//--QuerySelector
let que = document.querySelector('#Myfirst')
que = document.querySelector('.black') 
que = document.querySelector('div')
que.style.color = 'purple'
//console.log(que)

// 2-> Multi element selector
let ele = document.getElementsByClassName('child')
ele = document.getElementsByTagName('div')
console.log(ele[0])


Array.from(ele).forEach(element =>{
    console.log(element)
})
















