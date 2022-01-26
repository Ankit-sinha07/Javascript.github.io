console.log("This js is for Ajax.")

//------------------------------fetchbtn-----------------------------

document.getElementById('fetchbtn')
fetchbtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('You have Clicked the fetchbtn.')
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()
    
    //open the object
    //xhr.open('GET', 'Ankit.txt',true) //it will show Ankit.txt in console and here Asynchronous is true and here we are useing GET request
     
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true)//here we are useing GET request

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);//here we are useing POST request

    xhr.getResponseHeader('Content-type', 'application/json');
   
    //on progress(--Optional--) 
   xhr.onprogress = function(){
       console.log('Connectin...........')
   }
 
   //onreadystatechange this is a old function we rarely use it.
   /*xhr.onreadystatechange = function () {
   console.log('Ready state is', xhr.readyState)   
   }*/
     
   //When response is ready 
  xhr.onload = function(){
       if(this.status ===  200){
        console.log(this.responseText)
       }
       else{
           console.error("Some Internal Error Occured")
       }
   }

   //Send the request
   params = `{"name":"test1234567","salary":"12300000000","age":"23"}`;
   xhr.send(params);

   console.log("We are done!");
 
  
}
 

//-----------------------------------popbtn---------------------------
let popbtn = document.getElementById('popbtn')
popbtn.addEventListener('click',popHandler)

function popHandler(){
    console.log('You have Clicked the Pop Handler.')
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()
    
    //open the object
    //xhr.open('GET', 'Ankit.txt',true) //it will show Ankit.txt in console and here Asynchronous is true and here we are useing GET request
     
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees',true)//here we are useing GET request

    
     
   //When response is ready 
  xhr.onload = function(){
       if(this.status ===  200){
        let obj = JSON.parse(this.responseText)
        console.log(obj)
        let list = document.getElementById('lists')
        str = ""
        for(key in obj){
            str += `<li>${obj[key].employee_name}</li>`
        }
        list.innerHTML = str
       }
       else{
           console.error("Some Internal Error Occured")
       }
   }

   //Send the request
   xhr.send();

   console.log("We are done!");
}