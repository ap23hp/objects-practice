
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

//Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

//For example:

let users4 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
let usersById = groupById(users4);
console.log(`------------users group by id-------------`)
console.log(usersById)
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

//without reduce
// function groupById(array) {
//   let obj = {}; // start with an empty object

//   for (let i = 0; i < array.length; i++) {
//     let value = array[i];         // current element (object)
//     obj[value.id] = value;        // add it to obj using id as the key
//   }

//   return obj; // return the final object
// }