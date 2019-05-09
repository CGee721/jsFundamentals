// Arrow Functions

// Normal
function coffee() {
    console.log('coffee is good');
}

// Fat Arrow 
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();

let apples = (x) => console.log(`There are ${x} apples and ${y} pears`);
apples(10,5)


// Block body 
let apples = (x) => {
    console.log(`There are ${x} apples.`); 
apples(10)}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}
  

blah = function () {
  return lala;
  lala = "hi";
};
console.log(blah());

function whatDoesItDo(val) {
  return val ? 1 : 2;
}; 