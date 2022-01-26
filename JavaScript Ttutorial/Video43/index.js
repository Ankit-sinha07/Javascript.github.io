console.log("This JS is for Desturting");


// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564];
// console.log(a, b);

//[a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10]
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)

({ a, b, c, ...d } = { a: 30, b: 40, c: 50, d: 60, e: 870 });
//console.log(a, b, c, d)

//Array Destructing
const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
//console.log(a, b, c)

//Object Destructing 
laptop={
    model:"Hp Omen",
    age:"2018",
    Graphics:"GTX 1050",
    price:"100000",
    start: function(){console.log("started")}
}
const {model, age, Graphics, price, start} = laptop
console.log(model, age, Graphics, price, start)