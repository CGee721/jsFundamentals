// Ternaries

// Ternaries are a shorthand version of an if else if statement

let x = 6 

if (x> 0){
    console.log('yes');
} else {
    console.log('no')
};


//ternary
(x > 0) ? console.log('yes') : console.log('no');

// conditional statement 
if (x == 0){
    console.log('Hello')
} else if (x<0){
    console.log('Hi')
} else{
    console.log('goodbye')
}

// ternary operator
let x = 6;

(x == 0) ? console.log('Hello') : (x < 0) ? console.log('Hi') : console.log('Goodbye');


let x = 30;

(x < 18) ? console.log('you can\'t do anything') : (x < 21) ? console.log('Yay! you can drink') : console.log('Yay! you can rent a car')