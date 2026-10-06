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



let val:string = "56"



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


let abc:unknown;


// abc = "janii"

// // type narrowing..

// if(typeof abc == "string"){
//     // abc. 
// }



// if(typeof abc == "boolean"){
// abc = false
// }



// interface UserObj {
//     email : string,
//     password : number,
//     age : number
// }


// const myObj = {
//     email :"codermhasan@gmail.com",
//     password : 4567890,
//     age : 56
// }

// function foo (obj : UserObj):void{

   
    

    
// }

// foo()



interface User {
    email : string,
    password : string
}



// interface Admin extends User{
// isAdmin : boolean
// }
interface  User{
isAdmin : boolean
}


// function userCall (obj:User){
// obj.
// }


// type aliases



type val = string | number | boolean;


let randomVal:string = "hasan"


type arg = string | number


let myVar:arg = 67 



type userVal = string & {
    getUserData():string
}


// function abc (arg:userVal){

// }





class bottle {


constructor (public name:string , public price :number ){}
}


let b1 = new bottle("aquafina", 80)
let b2 = new bottle("pakola", 50)

console.log(b2);
