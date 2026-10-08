"use strict";
// let b = "janiii"
// let isAdmin = true
// // isAdmin = "true"
// // boolean , string , number , undefined , null 
// let val = 78
// let user:null = null
// // array, objects ,functions
// // let numsArr:number[] = []
// // tuples 
// // let arr:string[] = ["123" , 34, true]
// // array ke konsy index pr kis type ka data ayega 
// // let values:[string, number, boolean] = ["saqib", 45 , true]
// // enums
// enum UserRoles {
//     guest = "GUEST",
//     admin = "ADMIN"
// }
// enum StatusCodes {
//     Not_Found = 404,
//     Abondoned = 410,
//     Success = 200,
// }
// console.log(UserRoles.guest);
// let a:unknown;
// // type narrowing 
// if(typeof a == "string"){
//     a.toLowerCase()
// }
// if(typeof a == "number"){
//     a.toFixed()
// }
// const foo = ():number => {
//     console.log("hello");
// let value = 90
//     return value
// }
// type safety
// function continousLoop () {
//     while(true){
//         console.log("janiii");
//     }
// }
// continousLoop()
// console.log("mery function ke baad ka code");
let val = "56";
// console.log(val)
// let num:number = 90;
// if(num){
//     num = 100
// }
// console.log(num);
// let name = "sufiyan"
// name = "abdullah"
// let students:string[] = ["67", "89", "hasan"]
// let nums:number[] = [67, 89]
// let mixedArr:(number | string )[]  = [12, "23"]
// tuples 
// let arr:[number, string] = [12, "hasan"]
// enum UserRoles {
//     manager = "Manager",
//     admin = "Admin"
// }
// enum StatusCodes {
// not_found = 404,
// success = 200,
// resource_added = 201
// }
// // send response to frontend 
// console.log(StatusCodes.not_found);
let abc;
let randomVal = "hasan";
let myVar = 67;
// function abc (arg:userVal){
// }
// class bottle {
// constructor (public name:string , public price :number ){}
// }
// let b1 = new bottle("aquafina", 80)
// let b2 = new bottle("pakola", 50)
// console.log(b2);
// class Student {
//     public name
//     public email
//     public age
//     constructor(n:string, a:number, e:string){
// this.name = n
// this.age = a
// this.email = e
//     }
// }
// let s1 = new Student("Abdullah" , 18 , "abdullah@gmail.com")
// let s2 = new Student("Uzair" , 22, "uzair@gmail.com")
// // let s3 = new Student()
// console.log(s2);
// console.log(s2);
// console.log(s3);
class Bottle {
    name;
    price;
    material;
    constructor(name, price, material) {
        this.name = name;
        this.price = price;
        this.material = material;
        this.name = "jaani";
    }
}
let b1 = new Bottle("Aquafina", 60, "plastic");
// b1.name = "kuch bii."
console.log(b1);
let user = {
    email: "codermhasan@gmail.com",
    age: 23,
};
function foo(a = "56") {
}
foo("12");
