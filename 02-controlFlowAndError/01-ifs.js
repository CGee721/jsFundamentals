// IF 

//IF SYNTAX
let isOn = true;

if(isOn == true){
    console.log('The light is on!')
};

if (isOn) {
    console.log('The light is on!')
};






let isOff = false;
if(isOff==false){
    console.log('the light is off')
}


weather = 65;

if (weather<70) {
    console.log('Wear a jacket')
};

// IF ELSE
weather = 55;
if (weather< 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket needed')
};


// IF ELSE SYNTAX
// if (condition) {
// logic
// console.log(logic)
//} else{
//}




let name = 'Charles'

if (name == 'Charles'){
console.log('Hello my name is Charles')
} else {
    console.log('Hello, what is your name?')
}



let name = 'charleS'
if (name =='charleS'){
    console.log('Capitalize the first letter of name')
} else {
    console.log('Charles')
}

let name = 'cHarles';
if (name[0] == name [0].toUpperCase()){
    firstLetter = name [0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}