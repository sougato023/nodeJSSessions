// //writing functions
// function sum(a,b){
//     return a + b;
// }

// module.exports = {
//     sum:sum
// };

// //Since exports is private  to rach module
// console.log("Process: ",process)
// //run node helpers.js

//arrow functions
// const sum = (a, b) => {
//     return a + b;
// }
//since we have only one statement in the fucntion return 
//we can modify the above statement as below
const sum = (a, b) => a + b;

module.exports = {
    sum:sum
}