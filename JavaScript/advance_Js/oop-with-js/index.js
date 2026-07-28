let num = 12;



// Procedural Programming -->
// let a = 89;



// function printAval (){
    
//     console.log(a);
// }

// printAval()



// classes

class User {
    constructor (name, email) {
        this.name = name,
        this.email = email
    }
}


let u1 = new User ("Abdullah" , "abdullah@gmail.com")

console.log(u1);


class Admin extends User {
    constructor (){
    super("saleem", "saleem@gmail.com")
    this.admin = true
}
}

let a1 = new Admin("jani", "jani@gmail.com")
console.log(a1);

// class Student {

//     constructor (name, age){
//         this.name = name,
//         this.age = age
//     }


//     study (){   
//        console.log("study....");
//     }

//     sleeping (){
//         console.log("sleeping");
        
//     }

// }


// let s1 = new Student("ali", 15)
// console.log(s1);



// Object Oriented Programming -->



// function Student (name, age){
//     this.name = name
//     this.age = age

// }



// function study (){
//     console.log(this.name , "studying..");
    
// }

// function sleeping (){
//     console.log(this.name , "sleeping..");

// }

// Student.prototype.study = study


// Student.prototype.sleeping = sleeping;

// let s1 = new Student("Abdullah", 18)
// let s2 = new Student("Hasan", 18)

// generic function for every student

// console.log(s2);
// s2.study()



// function Student (name, age){
//     this.name = name
//     this.age = age,
    
//     this.study = function (){
//         console.log(this.name , "studying....");
//     }

//     this.sleeping = function (){

//         console.log(this.name, "sleeping..");
        
//     }
// }


// let s1 = new Student("Abdullah", 18)
// let s2 = new Student("Hasan", 18)


// console.log(s1);
// console.log(s2);


// let student1 = {
//     name : "abdullah",
//     age : 25,


//     study (){
//       console.log(this.name , "studying....");
        
//     },

//     sleeping (){

//         console.log(this.name, "sleeping..");
        
//     }
// }



// student1.sleeping()



// __proto__


// function User (name){
//     this.name = name
// }



// let u1 = new User("huzaifa")
// let u2 = new User("sufiyan")

// u2.__proto__ = User

// console.log(u2);

// console.log("random" in u1 );
