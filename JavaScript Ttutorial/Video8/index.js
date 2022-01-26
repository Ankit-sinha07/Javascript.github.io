const age = 18;
const vari = 100;
const Drive = true;

//------- if-else condition --------
/*if(age === 19){
    console.log("Age is 19")
}
else if(age === 69){
    console.log("AGE IS 69")
}

else{
    console.log("Age is Not 19 or 69")
}

if(typeof vari !== 'undefined'){
    console.log('vari is defined')
}
else{
    console.log('vari is undefined')
}*/

//-----------------------------
/*if(Drive || age > 18){
    console.log("USER CAN DRIVE")
}
else{
 console.log("USER CANNOT DRIVE")
}*/

//------ternary operator-----
//console.log(age == 45? 'Age is 45': 'Age is not 45')

//--------Switch Case StateMent--------------

switch (age) {
  case 18:
    console.log("You are 18");
    break;

  case 19:
    console.log("You are 19");
    break;

  case 20:
    console.log("You are 20");
    break;

  default:
    console.log("You are Kid Boi");
    break;
}
