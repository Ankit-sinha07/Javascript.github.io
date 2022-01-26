console.log("This JS is for Generators in javascript");

//(function*) is the syntax of Generators

function* numberGenerator() {
  let i = 0;

  //yield 1
  //yield 2
  //yield 3
  //yield 4

  while (true) {
    //yield (i++).toString()
    yield i;
    i++;
  }
}

const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

