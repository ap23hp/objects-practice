
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names=users.map((user)=>user.name)
console.log(names)


//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, 
// where fullName is generated from name and surname.


let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped= users1.map(function(user1){
return {fullName : `${user1.name} ${user1.surname}`,
id : user1.id}
})

console.log(usersMapped)

//Write the function sortByAge(users) that gets an array of objects with 
// the age property and sorts them by age.

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr = [ pete2, john2, mary2 ];

const sortByAge=function(arr){
return arr.sort((a,b)=>a.age-b.age)
}
console.log("--------------------sorting--------------")
console.log(sortByAge(arr));

//Write the function getAverageAge(users) that gets
//  an array of objects with property age and returns the average age.

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr1 = [ john3, pete3, mary3 ];
const getAverageAge=function(arrr){
return arrr.reduce((acc,curr)=>acc+curr.age,0)/arrr.length
}
console.log(`-----------reduce-----------------------------`)
console.log( getAverageAge(arr1))  // (25 + 30 + 29) / 3 = 28