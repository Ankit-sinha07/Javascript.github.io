console.log("This JS is for Virtual library");

//Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototype
//Add
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tablebody = document.getElementById("tablebody");
  let uiString = `
<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr`;

  tablebody.innerHTML += uiString;
};

//Validate
Display.prototype.validate = function (book) {
  if (book.name.lenght < 2 || book.author.lenght < 2) {
    return false;
  } else {
    return true;
  }
};

//show
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Congratulation!</strong> ${displayMessage}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
setTimeout(function(){
    message.innerHTML = ''
}, 3000);





};

//Clear
Display.prototype.clear = function (book) {
  let libraryform = document.getElementById("libraryform");
  libraryform.reset();
};

//Add submit event listner to libraryform
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformsubmit);

//libraryformsubmit
function libraryformsubmit(e) {
  e.preventDefault();
  console.log("You have Sucessfully submitted the Book in Library");
  //alert("You have Sucessfully submitted the Book in Library");

  let name = document.getElementById("bookname").value;
  let author = document.getElementById("Author").value;
  let type;

  let Fiction = document.getElementById("Fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (Fiction.checked) {
    type = Fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Success", "Your Book has been Sucessfully added");
  } else {
    //Show error to the user
    display.show("error", "Cannot add this book");
  }
}

let addTxt = document.getElementById("bookname");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(bookname.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  bookname.value = "";