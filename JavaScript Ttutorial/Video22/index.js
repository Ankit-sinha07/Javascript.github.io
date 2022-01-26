console.log("This is about Object Prototypes in JavaScript")

// Object litreas:- Object.Prototype
let Object = {
    name:"Ankit Kumar Sinha",
    Hobby:"Coding, playing Video Games and Watching Web series and Anime",
    Adderss:"pluto"
}
//console.log(Object)

function Obj(givenName){
    this.name = givenName 
}

Obj.prototype.getName = function(){
    return this.name
}

Obj.prototype.setName = function(newName){
    return this.name = newName
}

let Obj2 = new Obj("Ankit")
console.log(Obj2)
