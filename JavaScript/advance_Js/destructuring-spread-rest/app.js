// console.log("js is running -->");


// 
const studentNames = ["basil", "Sarim", "abdullah"];

// console.log('====================================');
// console.log(studentNames);
// console.log('====================================');

// console.log(studentNames[0]);

// const [basil,sarim , abdullah] = studentNames

// console.log(sarim);





//Array Destructing....
// function abc (){
//     return ["janiii", function (){
//         console.log("kuch biii");

//     }]
// }


// let [name, fn] = abc()


// console.log(fn());


//Object Destructing....


const bottle = {
    quantity: "500ml",
    price: 100,
    material: "plastic",
    brand: "pakola"
}


// const {price, quantity } = bottle

// console.log(price, quantity);




// const [one, ...others]  = studentNames;
// console.log(others);


// const {...others} = bottle;


// console.log(others);












// spread operator


// const bottle2 = {
//     quantity : "500ml",
//     price : 100,
//     material : "plastic",
//     brand : "pakola",
//     };

// console.log('====================================');
// console.log(bottle2);
// console.log('====================================');



// array spread 


// const arr = [...studentNames, {...bottle}]

// console.log(arr);



const arr2 = [
    [["ali", "shakoor", "abdullah"]]
]

console.log('====================================');
const [one, two, three]= arr2[0][0]

console.log(one);

console.log(two);
// console.log(array);
console.log(three);