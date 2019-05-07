// SWITCH

let friend

switch (friend){
    case "Condition":
    console.log('');
    break;
    case "Condition b":
    console.log('something else');
    break;
    default:
    console.log('default')
}


// String interpolation allows us to create a place holder for the value that we chose to assign


let dessert = cake
switch (dessert){ 
case "pie":
console.log('Pie, Pie, me oh my!');
break;
case "cake":
console.log('Cake is great');
break;
default: 
console.log('Not on the menu') 
}



let yep = -8

switch (true){
    case (yep < 0 && yep > -10):
    console.log('worked')
    break;
    case (yep > 0):
    console.log('worked');
    break;
    default:
    console.log('didn\'t work')
}