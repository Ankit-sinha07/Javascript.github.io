console.log("THIS JS IS FOR PROJECT-6");

// Utility function
// 1:- Utility function to get DOM element from string
function ElementString(string){
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild
}

//Initialize no.of Parameters
let addedParamCount = 0

// Hide the Parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

//If the user clicks on params, hide the json box

let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = "none";
    document.getElementById("parametersBox").style.display = "block";
});

//If the user clicks on params, hide the params box

let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
    document.getElementById("parametersBox").style.display = "none";
    document.getElementById("requestJsonBox").style.display = "block";
});

//If the users clicks on + buttons add more parameters 

let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
    let Params = document.getElementById("params");
    let string = `
<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label" style="color: black; font-weight: bold">Parameter
                        ${addedParamCount + 2}:-</label>
                    <div class="col-md-4 box1">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} Key" />
                    </div>
                    <br>
                    <div class="col-md-4 box2">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}"
                            placeholder="Enter parameter ${addedParamCount + 2} Value" />
                    </div>
                    <br />
                    <button class="btn btn-primary deleteParam">-</button>
                </div>`
    
//Convert the element string to DOM node                 
let paramsElement = ElementString(string)
params.appendChild(paramsElement)
//Add an event Listener to remove the parameter on clicking - button
let deleteParam = document.getElementsByClassName('deleteParam')
for(item of deleteParam){
    item.addEventListener('click',(e)=>{

            //alert("Deleting the Parameter")
            e.target.parentElement.remove()      

    })
}


addedParamCount++


                
});

//If the User Clicks on submit button
let submit = document.getElementById('submit')
submit.addEventListener('click',()=>{
    //showing 'Please Wait' in the responce box to request from the user
    document.getElementById('responseJsonText').value = "Please wait.. While Fetching responce"  
    

    //Fetch ing all the value user will enter
    let url = document.getElementById("url").value;
        let requestType = document.querySelector("input[name='requestType']:checked").value;
        let contentType = document.querySelector("input[name='contentType']:checked").value;

//If User has used params option instead of json, collect all the parameter in an object 
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey'+ (i + 1))  != undefined) {
                let value = document.getElementById('parametervalue' + (i + 1)).value;
                let Key = document.getElementById('parameterKey' + (i + 1)).value;
                data[Key] = value; 
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }
    
    // Log all the values in the console for debugging
    console.log('URL is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);
    console.log('data is ', data);

if(requestType == 'GET'){
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.text())
    .then((text) =>{
        document.getElementById('responceJsonText').value = text
    }) 
}

})



