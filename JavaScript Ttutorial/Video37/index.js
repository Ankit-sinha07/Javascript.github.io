console.log("This Js is for Iterators in Javascript");
//Iterators

function vegitableIterators(vegList) {
  let Vegindex = 0;
  //we will return an object
  return {
    list: function () {
      if (Vegindex < vegList.length){
      return{
        //We will return below obejct here
        value: vegList[Vegindex++],
        done: false
      } 
    }
      else 
      {
        return{
           done: true
        }
      }
    },
  };
}

const myArray = ["Aloo", "Bhindi", "pyaaz", "Kadu"];
console.log("My List Array is ", myArray)

//Using the Iterator
const vegitable = vegitableIterators(myArray)
console.log(vegitable.list().value)
console.log(vegitable.list().value)
console.log(vegitable.list().value)
console.log(vegitable.list().value)
//console.log(vegitable.list().vegi)









