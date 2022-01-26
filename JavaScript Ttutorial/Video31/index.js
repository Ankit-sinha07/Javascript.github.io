console.log("This JS is for Async/Await in JavaScript")

async function Ankit(){
    console.log('Inside Ankit function()');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "Ankit";
}

console.log("Before calling Ankit")
let a = Ankit();
console.log("After calling Ankit")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")
