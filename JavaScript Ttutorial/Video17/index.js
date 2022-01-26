/*let button = document.getElementById('btn')
button.addEventListener('click', func1)
button.addEventListener('dblclick', func2)
button.addEventListener('mousedown', func3)

//----Clcik
function func1(e) {
    console.log("You'r welcome",e)
    e.preventDefault()
}


//---doubleclick

function func2(e) {
    console.log("You'r welcome to double Click",e)
    e.preventDefault()
}


//---mouseDown
()
function func3(e) {
    console.log("This is a MouseDown ",e)
    e.preventDefault()
}*/

/*document.querySelector('.dummy').addEventListener('mouseenter', function (){
    console.log("You've Enter in mouseenter Event")
})*/

/*document.querySelector('.dummy').addEventListener('mouseleave', function (){
    console.log("You've Enter in mouseleave Event")
})*/

document.querySelector('.dummy').addEventListener('mousemove', function(){
    console.log("You've Enter in mouseMove Event")
})