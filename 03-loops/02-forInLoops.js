// For in Looops

// Great for iterating over values in an object 
// The For in statement iterates a specifed variable over all the enumerable properties of an object.

let student = { name: 'peter', awesome: 'JavaScript', week: 1 };
for (item in student){
    //console.log('item=>', item)
    console.log('student[item] =>'[item]);
}

let dogArray = ['collie', 'pitbull', 'newfie', 'st bernard',] 







let studentName = 'charles';
let capName;
for (let n in studentName ) {
    if (n == 0) {
        capName = studentName[n]. toUpperCase();
    } else {
        capName += studentName[n].toLowerCase()
    }

}
console.log(capName);