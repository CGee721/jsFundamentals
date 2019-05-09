// Arrays

//Arrays are an object. They are a container that can hold multiple data types.
// has [ ] brackets
// great for list

let students = ['Charles', 'Eric', 'Kobe', 16 , 74, false ['Nic', 'Bill', 'Thanos']]

// console.log(typeof students);
// console.log(students instanceof Array)
console.log(students[4])

//.push adds onto the array
//.splice removes an item 
//square bracket notations

let food = ['pizza','shrimp','hotdog','chicken']

//food.push('beer')
//food.splice(1, 1, 'bananas')
//food.splice(2,0,'chicken nuggets')
food.pop();// removes last item
food.shift(); // removes first item in array 
food.unshift('Muffin','Apples') // add elements to beginning of array
console.log(food)


for(f in food){
    console.log(food[f])
}



