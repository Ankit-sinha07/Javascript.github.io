console.log("This is about ES6 Classes and Inheritance");

//----------------------CLasses

class Employee {
  constructor(givenName, givenExperiennce, givenDepartment, givensalary) {
    this.name = givenName;
    this.experiennce = givenExperiennce;
    this.division = givenDepartment;
    this.salary = givensalary;
  }

  slogan() {
    return `This is the place where we make your dream come true -${this.name}`;
  }

  joiningYear() {
    return 2021 - this.experiennce; //This Function show's from how much year we are in the company
  }

  //static method
  static add(a, b) {
    return a + b;
  }
}

//-----------------------------------Inheritance
class Developer extends Employee {
  constructor(givenName, givenExperiennce, givenDepartment, givensalary, givenLanguage){
    super(givenName, givenExperiennce, givenDepartment, givensalary);
    this.language = givenLanguage;
  }

  favLanguage() {
    if (this.language == "python") {
      return "python";
    } 
    else {
      return this.language;//return the language name which is written in the DeveloperLine
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

EmployeeId1 = new Employee("Ankit Kumar Sinha", 18, "Web-Development and Programing", "$320000");
console.log(EmployeeId1);
//console.log(EmployeeId1.joiningYear()); //This fuction CallBack's the joining-Year function
//console.log(Employee.add(10, 10)); //This use the Static Add Method

Programmer = new Developer("Alex", 6, "Programing", "$21000", "python")
console.log(Programmer)
//console.log(Programmer.favLanguage())//This gives the Language of the Programmer
//console.log(Developer.multiply(5, 5))//This use the Static Multiply Mehtod 







