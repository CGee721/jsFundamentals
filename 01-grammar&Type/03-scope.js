// Scope

// JavaScript has function scopr.
// Scope determines the accessiblity of these variables
// Variables defined inside a function are NOT assessible from outside the function.

// Local and Global Scope

let x =12

function scope(){
    let x =33
    console.log(x);
}
scope();
console.log(x);

let x = 12

function coffee(){
    x = 33
    console.log(x);
}
coffee()
console.log(x);

// Var vs Let
// Var
var x = 12

function scope(){
    var x =33
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);
// Let 
var x = 12

function scope(){
    var x =33
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);




var x = 12

function scope(){
    const x =33
    if (true){
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()

let x =12
let x = 5
console.log(x);