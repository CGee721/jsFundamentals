// Iterating

//forEach() method that excutes a function once for each array element

forEach('currentValue', 'the index', 'the entire array');

let food = ['pizza','shrimp','hotdog','chicken'];

//food.forEach(f =>{console.log(f)})
//food.forEach( (f,number)=>{console.log(f, number)})
food.forEach((f, number, array)=>{console.log(f,number,array)})

let foodFunction = () =>{
    for (f in food ){
        console.log(f)
        console.log(food[f],)
    }
}

let movies = ['Avengers','Ironman','Thor', 'Captain America', 'Batman']


movies.forEach (movie=>{console.log})

movies.push('8 Mile')

