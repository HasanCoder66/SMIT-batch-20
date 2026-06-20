// Arrow Function

// syntax

// const foo = () => {
//     console.log(this);
    
// }

// foo()

// function normal (){
//     console.log(this);
    
// }

// normal()


// let obj = {
//     printName : function () {
//         console.log("print Name --->",this);
        
//     },
//     printNameUsingArrowFn : () => {
//        let user = {
//         nestedFn : () => {
//             console.log(this);
            
//         }
//        }

//        return user
        
//     }
// }

// obj.printName()
// console.log(obj.printNameUsingArrowFn().nestedFn());


// this keyword

// hoisting

// arguments

// const abc  = () => {

// }

// function abc(){
// console.log(arguments);
// }

// const abc = (...arg) => {
    
//     console.log(arg);
// }


// abc("aj", "kal", "parso")

// one liner


// const oneLinerFn = () => "22"


// console.log('====================================');
// console.log(oneLinerFn())
// console.log('====================================');





// function abc (a, b){
// console.log(`${a} ${b}`);

// }



// abc("hasan", "ashraf")



// function userAge (age){
// console.log(age);

// }

// userAge()


// function sum (a = 5 ,b = 10){
//     console.log(a + b);
    
// }


// sum()


// mapping --> array

// ["one", "two"] 


// let data = []


// function setData(data){
// let users = data
// }

// setData(data)


// function foo (a = 12, b){
// console.log(a + b);

// }


// foo()



