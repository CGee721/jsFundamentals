// Expressions
//do not get hoisted


let hi = function hi() {
    console.log('HI')
}
let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}