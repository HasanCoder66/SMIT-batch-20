// Higher Order Functions
// Higher Order Function kya hota hai?
// Kya map() ek higher order function hai?
// Kya forEach() value return karta hai?
// Ek example do Higher Order Function ka.


// function higherOrderFn () {
// // displayName()
// }

// higherOrderFn()


// function displayName (){}

// Callback function kya hota hai?
// Ek function banao jo dusre function ko parameter me le.

// function abc (cb){
// console.log('====================================');
// console.log(cb);
// console.log('====================================');
// }

// function xyz (){

// }


// abc(xyz)


// filter() ka use kis liye hota hai?
// reduce() ka basic purpose kya hai?
// find() aur filter() me kya difference hai?
// map() aur forEach() me kya difference hai?


// Array Higher Order Methods

// map()
// [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.

// let numsArr = [1,2,3,4,5]
// let modifiedArr = numsArr.map((n) => {
//     return n * 2
// })

// console.log('====================================');
// console.log(modifiedArr);
// console.log('====================================');

// Ek array of names ko uppercase me convert karo using map().

// let stuNames = ["ali","abdullah","arham"];
// let stuModified = stuNames.map((student) => {
//     return student.toUpperCase()
// })

// console.log(stuModified);

// Prices array me har price me 10 add karo using map().

// let prices = [10,20,30,40,50];
// let updatedPrices = prices.map((p) => p + 10)

// console.log('====================================');
// console.log(updatedPrices);
// console.log('====================================');
// Students names ke sath "Mr." add karo using map().

//  let names = ["ali","abdullah","arham"];

//  let updatedNames = names.map((name) => `MR ${name}`)

//  console.log(updatedNames);
 
// Numbers array ko square me convert karo.

// let nums = [2,5,25]
// let numsSquare = nums.map((num) => num*num)
// console.log(numsSquare);



// filter()
// [1,2,3,4,5,6] me se sirf even numbers filter karo.

let nums = [1,3,5,7,8,6];
// let evenNums = nums.filter((num) => {
//     if(num % 2 == 0){
//         return num
//     }
// })

let evenNums = nums.filter((num) => num % 2 == 0)

console.log('====================================');
console.log(evenNums);
console.log('====================================');
// Names array me sirf wo names filter karo jinki length 5 se zyada ho.
// Ek prices array me sirf prices greater than 100 filter karo.
// Students me se passed students filter karo.
// Negative numbers ko filter karo.



// forEach()
// Array ke tamam elements console me print karo using forEach().
// Ek fruits array ko numbering ke sath print karo.
// Users array me har user ko welcome message do.
// Ek array ka total manually forEach() se nikalo.
// Har student ka naam uppercase me print karo.



// find()
// [10,20,30,40] me se first number greater than 25 find karo.
// Users array me "Ali" naam ka user find karo.
// Ek products array me first expensive product find karo.
// Ek array me first even number find karo.
// Students me first failed student find karo.




// reduce()
// [1,2,3,4] ka sum reduce() se nikalo.
// Prices array ka total calculate karo.
// Numbers array ka maximum value find karo using reduce().
// Ek words array ko single sentence me convert karo.
// Shopping cart ka total bill calculate karo.
// findLastIndex()
// [1,2,3,2,4,2] me last 2 ka index find karo.
// Last even number ka index find karo.
// Ek names array me last "Ali" ka index find karo.
// Ek products array me last expensive product ka index nikalo.
// Array me last negative number ka index find karo.