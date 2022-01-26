console.log("This Js is for of loop and for in loop ")


let people = ['Ankit', 'Utkarsh', 'soruv', 'shubham', 'vishal']

//**************for-in loop*****************
console.log("/****************for in loop start here*****************/")
//--------Traditional(old) for loop

for (let index = 0; index <people.length; index++) {
    const element =people[index];
    console.log(element)
}


let obj ={
    name: 'Ankit Kumar Sinha',
    city: 'Muzaffarpur',
    language:'JavaScript'
}

//console.log(obj)

//-------Iterating an Object using Traditional for loop

//for(let index = 0; index < Object.keys(obj).length; index++){
//    const element = obj[Object.keys(obj)[index]]
//    console.log(element)
//}

//Iterating an obejct using for-in loop//

for(let key in obj){
    console.log(obj[key])
}

//We can use for in with string to loop through all the characters 

//myString = "This is my String"
//for(index in myString){
   //console.log(myString[index])
//}



//*****for of loop
console.log("/****************for of loop start here*****************/")
people = ['Ankit', 'Utkarsh', 'soruv', 'shubham', 'vishal']
for(let name of people){
    console.log(name)
    
}