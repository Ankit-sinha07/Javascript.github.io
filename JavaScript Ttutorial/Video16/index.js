//-------------------------------------------------------Click Event-------------------------------------

/*document.getElementById("heading").addEventListener("click", function (e) {
  console.log("You have Clicked on wlecome");
  
//Traget----------------
  let variable;
  variable = e.target;
  
  //Gives class Name
  variable = e.target.className;
  //console.log(variable);
  
  //Gives Class List
  variable = e.target.classList
  //console.log(variable);
  
  //Gives id
  variable = e.target.id
  console.log(variable);

  //For adding a link
  //location.href = '//facebook.com'
});*/


//-------------------------------------------------------mouseover Event-------------------------------------
document.getElementById("heading").addEventListener("mouseover", function (e) {
    console.log("You have Clicked on wlecome");
    
  //Traget----------------
    let variable;
    variable = e.target;
    
    //Gives class Name
    variable = e.target.className;
    //console.log(variable);
    
    //Gives Class List
    variable = e.target.classList
    //console.log(variable);
    
    //Gives id
    variable = e.target.id
    console.log(variable);
  
    //For adding a link
    //location.href = '//facebook.com'
});