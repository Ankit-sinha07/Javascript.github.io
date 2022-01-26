//-----------------LocalStorage---------------------------------

//For adding an Array
let impArray = ['Apple', 'Banana', 'Orange'] 

//--------setItem
//Add a key value pair inside local storage
localStorage.setItem("Name", "Ankit Kumar Sinha");
localStorage.setItem("Name2", "Sagun Kumar Sinha");
localStorage.setItem('FRUITS', JSON.stringify(impArray))

//ClearStroage
// Clear's the entire Storage
//localStorage.clear()

//----------removeItem
//For Removing onlyn a single Key Value Pair
//localStorage.removeItem("Name");

//getItem
//Retrieve an item from the local Storage
let name = localStorage.getItem("Name");
console.log(name);

let name2 = localStorage.getItem("Name2");
console.log(name2);

let Fruits = JSON.parse(localStorage.getItem('FRUITS'));
console.log(Fruits)

//-----------------SessionStorage---------------------------------

sessionStorage.setItem("sessionName", "sAnkit Kumar Sinha");
sessionStorage.setItem("sessionName2", "Sagun Kumar Sinha");
sessionStorage.setItem('sessionFRUITS', JSON.stringify(impArray))


