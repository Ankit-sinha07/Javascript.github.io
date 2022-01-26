console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
  {
    name: "Ankit Kumar Sinha",
    subject: "WebDevelopment and Python Programming",
  },
  { name: "Harry", subject: "Machine Learning" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false
      if(!error){
        resolve()
      }
      else{
          reject()
      }
    }, 5000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  }, 1000);
}

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent).then(function(){
    getStudents()
}).catch(function(){
    console.log("some error Happened")
})
// getStudents();
