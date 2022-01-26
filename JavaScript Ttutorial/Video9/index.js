//-----Loops
//--General Loops: for, while, do-while loops

//--for-loop
/*for(i = 0; i<100; i++){
    console.log(i)
}*/

//--While-loop
/*let j = 0
while(j<10){
    console.log(j+1)
    j++
}*/

//---Do-while
/*let k = 0;
do {
    if (k === 5) {
        k += 1;
        continue;
    }
    console.log(k+1);
  k++;
} while (k < 10);*/

//------------Array in loop
/*let array = [10,20,30,40,50,60]
array.forEach(function(element){
    console.log(element)
})
console.log('done')*/


//------Object in loop
let Obj = {
    name: "Ankit",
    Language: "JavaScript",
    Age: 19
}
for(let key in Obj){
    console.log(`The ${key} of Object is ${Obj[key]}`)
}





