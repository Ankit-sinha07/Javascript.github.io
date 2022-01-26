console.log("This JS is for Asynchronous Programming")

//Example for Synchronous Programming

/*for (let index = 0; index <= 10000; index++) {
    const element = index;
    console.log("This is index number " + index)
    
}

console.log("DONE PRINTING!")*/

//In Synchronous Programming:-
//It will not move to the next thing until the work is not done if given work is done then it will Move to the next thing as planned

//As you can see:- 
//In Above the Example it will not print "DONE PRINTING" until it prints all the numbers from 0 to 10000 and after printing from 0 to 10000 it will show "DONE PRINTING"  


//Example for Asynchronous Programming
setTimeout(() => {
    for (let index = 0; index <= 10000; index++) {
        const element = index;
        console.log("This is index number " + index)
        
    }
    
}, 100);
console.log("DONE PRINTING!")

//In Asynchronous Programming:-
//It will move to the next thing and do Previous work in BackGround 

//As you can see:- 
//In the Above Example it will print "DONE PRINTING" and print the number from 0 to 10000 in the background.