// FOR LOOPS

/*
A loop is a program tool that repeats a set of instructions until a specified is met
*/

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots)[1];
console.log(vacationSpots[2]);

// Types of loops
/*
for statement
do while statement
while statement
Labeled statement
Breeak statement
continue statement
for in statement 
for of statement 
*/

for (let i = 0; i < 10; i++) {
console.log(i);
}



for(let i = 0; i <= 20; i+=2){
    console.log(i);
}

for (let i = 10; i >= 0; i--){
    console.log(i);
}

for (let i =0; i >= -24; i-=2) {
    console.log(i)
}

let name = 'Charles'
for (p=0; p < name.length; p++) {
    console.log(name[p])
} 


let sum = 0;
for(let i = 1; i <= 50; i++) {
    sum = sum+i;
}
console.log(sum)
   
