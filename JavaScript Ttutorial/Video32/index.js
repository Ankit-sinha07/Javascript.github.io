console.log("This JS is for Error Handling")


//Pretending that this is coming from a server
let a = "Ankit Kumar Sinha"
a = undefined
if(a != undefined){
    throw new Error('This is undefined')
}
else{
    console.log('This is Undefined')
}

try {
    console.log("we are inside try block")
    functionAnkit()
} catch (error) {
    console.log("Hello User")
    console.log(error.message)
}finally{
    console.log("Finally we will run this")
}