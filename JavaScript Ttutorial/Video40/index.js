console.log("Maps in JavaScript");

//Maps in JavaScript:We can use any type of key or value
const myMap = new Map();

const key1 = "myStr",
  key2 = {},
  key3 = function () {};

//Setting map values
myMap.set(key1, " This is a string value");
myMap.set(key2, "This is a Blank Obj");
myMap.set(key3, "This is an empty function");
console.log(myMap);

//Getting the value for Map
let value1 = myMap.get(key1);
console.log(value1);

//Get the Size of the map
console.log(myMap.size);

//We can loop using for-of to get keys  and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

//Get only keys 
for(let key of myMap.keys()){
    console.log('keys is', key)
}

//Get only value
for(let value of myMap.values()){
    console.log("value is", value)
}

//We can loop using for-each also
myMap.forEach((value, key)=>{
 console.log('key is ', key)
 console.log('Value is', value)
})

//Converting map key into Array
let mykeysArray = Array.from(myMap.keys())
console.log('Map to Arrray',mykeysArray)

//Converting map value into Array
let myValueArray = Array.from(myMap.values())
console.log("Values to Array", myValueArray)
