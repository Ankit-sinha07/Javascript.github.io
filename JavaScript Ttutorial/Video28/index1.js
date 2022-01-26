console.log("This Js is for Promises function");

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true; //If we make it false then the if-statement will run.

      if (!error) {
        console.log("Function: I Kept my Promise ");
        resolve("Promise Resolve no error");
      } 
      
      else {
        console.log("Function: Sorry I cannot keep my promise");
        reject("Promise rejected cause of error");
      }
    }, 3000);
  });
}

func1()
  .then(function () {
    console.log("Ankit: Promise Resolved");
  })
  .catch(function (error) {
    console.log("Ankit: Promise rejected " + error);
  });
