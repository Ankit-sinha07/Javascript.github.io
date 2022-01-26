let a = document
a = document.all
//a = document.body
//a = document.forms
a = document.links
a = document.images
Array.from(a).forEach(function(element){
    console.log(element)
})

//console.log(a)