console.log("This Js is for Sets in JavaScript")

//Set stores unique values
const mySet = new Set() //Initialize an empty set
console.log('The Set look like this: ', mySet)


//Adding Value to this Set
mySet.add('this')
mySet.add('my name')
mySet.add('colossal')
console.log('The second Set look like this: ', mySet)


//This is a Constructor of set in this there is a:- integer value, string, object and boolen value and all of that is inside a Array

/*let mySet2 = new Set([1,45, 'Hello User', {Name:"Ankit", Age:'19'},true,false])
console.log("This is how mySet2 look like", mySet2)*/

console.log(mySet.size)//it will give a size of a set
console.log(mySet.has('this'))//it will show true if the written element is there in the set or not otherwise it will show false.

console.log('Before removing', mySet.has('colossal'))
mySet.delete('colossal')// remove an element from the set
console.log('After Removing', mySet.has('colossal'))

//Iterating a set using for-of loop
for(let item of mySet){
    console.log("item is "+item)
}

//Iterating a set using for-each loop
mySet.forEach((item)=>{
    console.log("THE ITEM IS:", item)
})

