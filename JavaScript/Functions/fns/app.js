console.log("js is running ->");



// function declaration
// function normal (param1, param2){
//    return param1 + param2;
   
    
// }



// normal(23, 34)


// function expression 

var normalFn = function (){
//  console.log("janiii");

 return "janiii"
    
}

const returnNormalFn = normalFn()

console.log(returnNormalFn);




// This will throw a ReferenceError or TypeError!
// console.log(sayGoodbye());
// ; 

// var sayGoodbye = function() {
//   console.log("Goodbye!");
// };



// Array | Object


let arr = [0,1,2,3,4];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// Array Desturcturing

const [zero, one, ,three ] = arr

console.log(zero,three);


let user = {
    skills: ["HTML", "CSS","Javascript"],
    address : {
        city: "Karachi",
        country : "Pakistan"
    },
    // address : {
    //     city: "Lahore",
    //     country : "Pakistan"
    // },
}

// console.log(user.skills);


// let [firstSkill, secondSkill ] = user.skills

// console.log(secondSkill);


// console.log(user);

// const {address} = user

// console.log(address.cities);