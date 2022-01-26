//--------Function
/*let name = 'Ankit Kumar Sinha'

const mygreet = function(name, thanks = 'Ok'){
    console.log(`HELLO THIS IS A GREEATING MESSAGE TO:- ${name} ${thanks}`)
    return 1.1
}
let value = mygreet(name,'Thanks a lot')
console.log(value)*/

//----------------

/*const Myobj = {
    name:'ANKIT KUMAR SINHA',
    game: function(){
        return 'GTA'
    }
}
console.log(Myobj.game())


//-----Array function()----
array = ['fruits', 'vegitable', 'plates']
array.forEach(function(element, array){
     console.log(element, array)
})*/

//-----Scope
let i = 123;
console.log(i);
function Ai(name) {
  i = 8;
  return `This is a ${name} Ai`;
  console.log(i);
}
console.log(Ai("Ankit"), i);
