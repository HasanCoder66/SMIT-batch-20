// // // let b = "janiii"



// // // let isAdmin = true

// // // // isAdmin = "true"


// // // // boolean , string , number , undefined , null 

// // // let val = 78
// // // let user:null = null

// // // // array, objects ,functions


// // // // let numsArr:number[] = []




// // // // tuples 

// // // // let arr:string[] = ["123" , 34, true]


// // // // array ke konsy index pr kis type ka data ayega 

// // // // let values:[string, number, boolean] = ["saqib", 45 , true]



// // // // enums




// // // enum UserRoles {
// // //     guest = "GUEST",
// // //     admin = "ADMIN"
// // // }


// // // enum StatusCodes {
// // //     Not_Found = 404,
// // //     Abondoned = 410,
// // //     Success = 200,
// // // }



// // // console.log(UserRoles.guest);




// // // let a:unknown;





// // // // type narrowing 


// // // if(typeof a == "string"){
// // //     a.toLowerCase()
// // // }

// // // if(typeof a == "number"){
// // //     a.toFixed()
// // // }





// // // const foo = ():number => {

// // //     console.log("hello");
// // // let value = 90
// // //     return value
    
// // // }


// // // type safety


// // // function continousLoop () {
// // //     while(true){
// // //         console.log("janiii");
        
// // //     }
// // // }

// // // continousLoop()
// // // console.log("mery function ke baad ka code");



// // let val:string = "56"



// // // console.log(val)


// // // let num:number = 90;

// // // if(num){
// // //     num = 100
// // // }

// // // console.log(num);




// // // let name = "sufiyan"


// // // name = "abdullah"




// // // let students:string[] = ["67", "89", "hasan"]
// // // let nums:number[] = [67, 89]


// // // let mixedArr:(number | string )[]  = [12, "23"]



// // // tuples 

// // // let arr:[number, string] = [12, "hasan"]





// // // enum UserRoles {
// // //     manager = "Manager",
// // //     admin = "Admin"

// // // }


// // // enum StatusCodes {
// // // not_found = 404,
// // // success = 200,
// // // resource_added = 201

// // // }


// // // // send response to frontend 

// // // console.log(StatusCodes.not_found);


// // let abc:unknown;


// // // abc = "janii"

// // // // type narrowing..

// // // if(typeof abc == "string"){
// // //     // abc. 
// // // }



// // // if(typeof abc == "boolean"){
// // // abc = false
// // // }



// // // interface UserObj {
// // //     email : string,
// // //     password : number,
// // //     age : number
// // // }


// // // const myObj = {
// // //     email :"codermhasan@gmail.com",
// // //     password : 4567890,
// // //     age : 56
// // // }

// // // function foo (obj : UserObj):void{

   
    

    
// // // }

// // // foo()



// // interface User {
// //     email : string,
// //     password : string
// // }



// // // interface Admin extends User{
// // // isAdmin : boolean
// // // }
// // interface  User{
// // isAdmin : boolean
// // }


// // // function userCall (obj:User){
// // // obj.
// // // }


// // // type aliases



// // type val = string | number | boolean;


// // let randomVal:string = "hasan"


// // type arg = string | number


// // let myVar:arg = 67 



// // type userVal = string & {
// //     getUserData():string
// // }


// // // function abc (arg:userVal){

// // // }





// // // class bottle {


// // // constructor (public name:string , public price :number ){}
// // // }


// // // let b1 = new bottle("aquafina", 80)
// // // let b2 = new bottle("pakola", 50)

// // // console.log(b2);




// // // class Student {

// // //     public name
// // //     public email
// // //     public age


// // //     constructor(n:string, a:number, e:string){

// // // this.name = n
// // // this.age = a
// // // this.email = e

// // //     }
// // // }


// // // let s1 = new Student("Abdullah" , 18 , "abdullah@gmail.com")
// // // let s2 = new Student("Uzair" , 22, "uzair@gmail.com")

// // // // let s3 = new Student()

// // // console.log(s2);
// // // console.log(s2);
// // // console.log(s3);







// // class Bottle {
// //     constructor(public readonly name :string, public price : number, public material:string){

// //        this.name = "jaani"
// //     }

// // }



// // let b1 = new Bottle("Aquafina" , 60, "plastic")
// // // b1.name = "kuch bii."

// // console.log(b1);


// // // class PlasticBottle extends Bottle {
// // // constructor(protected name :string, public price : number, public material:string){
// // // super(name, price , material)


// // // }

// // // }




// // // let plasticb1 = new PlasticBottle("Aquafina" , 70, "plastic")


// // // console.log(plasticb1);


// // // let b1 = new Bottle("Pakola", 60, "Plastic");


// // // let b1 = new Bottle("Nestle", 60, "Plastic");

// // // console.log(b1);






// // // optional properties



// // interface UserMera {
// //     email : string,
// //     age : number,
// //     gender? : string
// // }


// // let user = {
// //     email : "codermhasan@gmail.com",
// //     age : 23,
    

// // }



// // function foo (a:string = "56"):void{

// // }

// // foo("12")



// // classes


// // class User {
// //     protected email
// //     public pass


// //     constructor(e:string, p:string){
// //         this.email = e
// //         this.pass = p
// //     }


// //     getUserData(){
// //         console.log("user data milgaya", this.email);
        
// //     }
// // }


// // class Admin extends User {

// //     protected isAdmin

// //     constructor(e:string , p:string){
// //         super(e, p)
// //         this.email = "ali@gmail.com"
// //         this.isAdmin = true
// //     }
// // }


// // let a1 = new Admin("saim@gmail.com", "saim123" )
// // let u2 = new User("saim@gmail.com", "saim123" )

// // // u2.email = "ali@gmail.com"

// // console.log(a1);




// // class Student {

// //     constructor(public r:number, public gender?:string){ }


    
// //     // public get rollNum() : number {
// //     //     return this.r
// //     // }
    

    
   
// //    public set setRollNum(v : number) {
// //     this.r = v;
// //    }
   
    

// // }


// // let s1 = new Student(456)
// // // s1.readRollNum()
// // // s1.setRollNum(786)





// // // console.log(s1.rollNum);

// // s1.setRollNum = 45


// // console.log(s1);


// // s1.rollNum = ""




// // class Random {

// //     static value = 78

// //    static myRandomMehtod (){
// //         return Math.random()
// //     }
// // }




// // console.log(Random.myRandomMehtod());





// // abstract class PakanaHai {
// //     constructor(public kiapakanahai:string, public gasNam: string){}
// // }




// // class DaalBanado extends PakanaHai {

// //     constructor(foodName:string, gasName:string){
// //         super(foodName, gasName)
// //     }
// // }




// // let daalPakgai = new DaalBanado("chany ke daal", "LPG")

// // console.log(daalPakgai);



// // OOP 


// // procedural programming
// // object oriented programming
// // functional programming









// class User {
//     constructor(public email : string){}

//     login (email:string){
//      if(!email) return
//      else {
//         console.log("user login hogiya..");
        
//      }   
//     }
// }



// class Recruiter extends User {

//     login(password:string){}
// }


// let r1 = new Recruiter("recruiter@gmail.com")
// console.log(r1);









// function foo (a:string, cb:(val:string) => void) {

//     cb("hey")
// }



// foo("hasan" , (val:string):void => {
//     console.log(val);
    
// })



// function kuchBi (val:number, sum:(n1:number, n2:number) => void):void{

//     sum(val, 89 )
// }


// kuchBi(56, (n1: number, n2:number) => {
//     console.log(n1 + n2);
    
// })




// function foo (a:number, b:string, c:string | number  = 90):void{}


// foo(12, "hey", "jani")
// foo(56, "jaani")






// ... 



// function getValues (...nums:number[]):void{}



// getValues(1,2,3,4,5,6)



// function students (...students:string[]){

// }


// students("ali", "abdullah", "hasan")




// function overloading






// signuature

// function sum (a:number, b:number):void
// function sum (a:string, b:string):void


// function sum (a:number | string, b:number | string){
    
//     if(typeof a == "string" && typeof b == "string"){
//        let values = a + b

//        console.log(values);
       
        
//     }

//     else if(typeof a == "number" && typeof b == "number"){
//         console.log(a + b);
        
//     }


//     else{
//         throw new Error("invalid arguements")
//     }

    
// }



// sum(22,22)
// sum("22", true)




// function kuchBi <T> (a:T){}


// kuchBi(45)
// kuchBi(true)




// Generic Classes


// class Mobile <T> {

//     constructor(public key:T){}
// }


// let m1 = new Mobile(12)
// console.log(m1);




// generic interfaces


// interface User <T>{
//     email :string,
//     password:string
//     secretKey : T
// }


// function createUser (u:User<number>){
// console.log(u.secretKey);

// }


// createUser({email : "codermhasan@gmail.com", password: "asdlfalj", secretKey:123456789})



// esa function jo kisi bi type ki value ko accept kersekta ho..

// usky generic function 


// export function sendPayment (val:number){
//     console.log("payment send" , val);
    
// }

// "string literal"


// type assertion 

// function foo <T> (a:T , b:T):T{
//     return "string" as T
// }



// foo("string", "string")




// let num = String(56);

// console.log("string -->",num);



// let a :number | null | undefined = 56


// a!.





function foo (a:string , b:number){
    if(typeof a == "string"){
        console.log(a);

        let n1 = Number(a)
        console.log(n1);
        
        
    }
    if(typeof b == "number"){
        console.log(b);

        let str = String(b)
        console.log(str);
        
        
    }
}


foo("45", 89)