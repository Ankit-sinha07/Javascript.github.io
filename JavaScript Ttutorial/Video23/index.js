console.log("This is about prototype Inheritence");

const prototype = {
  slogan: function () {
    return `Here we make dreem Come true`;
  },
  changename: function (newName) {
    this.name = newName;
  },
};

//-----This Creates employee Object

const employee = Object.create(prototype)
employee.name = "Ankit kumar Sinha"
employee.role = "programmer"
employee.salary = "$1000000" + " Dollar"
employee.changename("ANKIT KUMAR SINHA")//this is used for changing the name 
//console.log(employee)


//--------This also Creates employee Object
/*const employee = Object.create(prototype, {
  name: { value: "Ankit Kumar Sinha", writable: true },
  role: { value: "Web Developer" },
});
employee.changename("ANKIT KUMAR SINHA");*/
//console.log(employee);

//-------employee Constructor
function EmployeeDetails(name, salary, branch) {
  this.name = name;
  this.salary = salary;
  this.branch = branch;
}

//------slogan
EmployeeDetails.prototype.slogan = function(){
    return `Here we make dreem Come true, Regards- ${this.name}`;
}

let employeeDetails = new EmployeeDetails("Ankit Kumar Sinha", 1010000, "Programmer, Web Developer")
//console.log(employeeDetails.slogan())


//--------Making 2nd constructor for Programer
function Programmer(name, salary, branch, language){
    EmployeeDetails.call(this,name, salary, branch)
    this.language = language

}


// Manually setting the employee
Programmer.prototype.constructor = EmployeeDetails




//Inherit the Prototype
Programmer.prototype = Object.create(EmployeeDetails.prototype)

let Alex = new Programmer("Alex",10000,"Webdevelopment","JAVASCRIPT")
console.log(Alex)













