console.time('You waited')

/*-------------------------------------------*/
console.log("Hello world ")
console.log([10,20,30,40])
console.log({name:"Ankit kumar sinha", Marks:150})

/*-------------------------------------------*/
console.table({name:"Ankit kumar sinha", Marks:151})

/*-------------------------------------------*/
console.warn("Warning data leak")

/*-------------------------------------------*/
console.assert(0>1, `It can't Happen`)

/*-------------------------------------------*/
console.group('simple') 
console.log('Grouped') 
console.groupEnd('simple') 
console.log('new section')

/*-------------------------------------------*/
for (i=0;i<4;i++){
    console.count(i)
}

/*-------------------------------------------*/
console.timeEnd('You waited')