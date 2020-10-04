//writing functions
function sum(a,b){
    return a + b;
}

module.exports = {
    sum:sum
};

//Since exports is private  to rach module
console.log("Process: ",process)
//run node helpers.js