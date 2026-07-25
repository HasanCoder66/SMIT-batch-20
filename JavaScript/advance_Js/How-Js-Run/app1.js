// console.log("Global execution start -->")   

// let globalVar = "har jaga access hota hai";

// console.log(fnGlobal);

// // fnGlobal()  

// var fnGlobal = function (){
//     console.log("mai global fn mai hon....") 
// }


// console.log(globalVar) 

// console.log("Global execution end-->")  



console.log("Global execution start -->")  // 1

var globalVar = "har jaga access hota hai";


function fnGlobal (){
    console.log("mai global fn mai hon....")  // 3
}

console.log(globalVar)  // 2
fnGlobal()  


console.log("Global execution end-->")  //4 