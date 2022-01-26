console.log("This JS is for 'Fetch API'")

//div with id="myBtn".
/*let myBtn = document.getElementById("myBtn")

//div with id="content".
let content = document.getElementById("content")*/
//---------------------------------------Get request using Fetch Api------------------------------------
//function getData(){
//    url = "Ankit.txt"
//    fetch(url).then((response)=>{
//        return response.text()   
//    }).then((data)=>{
//        console.log(data)
//    })
//}
// getData()   

/*function getData(){
    url = "https://api.github.com/users"
    fetch(url).then((response)=>{
        return response.json()   
    }).then((data)=>{
        console.log(data)
    })
}
getData()*/



//---------------------------------------Post request using Fetch Api------------------------------------

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"adasdsad347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}
postData()
