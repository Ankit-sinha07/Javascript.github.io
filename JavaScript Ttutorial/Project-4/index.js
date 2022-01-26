console.log("This Js is for Project-4")

//------Taking Name, Email, PhoneNumber in JavaScript

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validEmail = false
let validPhone = false
let validUser = false

//console.log(name, email, phone)

//EventListner for Name for validating
name.addEventListener('blur', ()=>{
//Validating UserName    
    console.log("Name is blured")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/
    let str = name.value
    console.log(regex, str)   
    
    if(regex.test(str)){
        console.log('Match found:Name')
        name.classList.remove('is-invalid')
        validUser = true
    } 
    else{
        console.log("Match not found:Name")
        name.classList.add('is-invalid')
        validUser = false
    }

})

//EventListner for email for validating
email.addEventListener('blur',()=>{
//Validating Email Address
    console.log("Email is blured")
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    console.log(regex, str)   
    
    if(regex.test(str)){
        console.log('Match found:email')
        email.classList.remove('is-invalid')
        validEmail = true
    } 
    else{
        console.log("Match not found:email")
        email.classList.add('is-invalid')
        validEmail = false
    }
})


//EventListner for phone for validating
phone.addEventListener('blur',()=>{
//Validating PhoneNumber
    console.log("phone is blured")
    let regex = /^([0-9]){10}$/
    let str = phone.value
    console.log(regex, str)   
    
    if(regex.test(str)){
        console.log('Match found:phone')
        valiPhone = true
    } 
    else{
        console.log("Match not found:phone")
        phone.classList.add('is-invalid')
        validPhone = false
    }
})


//Submit
let submit = document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("You have clicked the submit button")
    console.log(validUser, valiPhone, validEmail )
    alert('Detail Submitted')
    if(validEmail && validUser && validPhone){
        alert("Submmiting the form")
        let success = document.getElementById('success')
        success.classList.add('show')
        failure.classList.remove('show')
    }
})
   