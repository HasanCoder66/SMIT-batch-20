// console.log("js is running -->");

    let students = [
        {
            id: 1,
            name : "sufiyan",
            fatherName  : "shahid",
            skills : ["HTML", "CSS", "Javacript", "Advanced Javascript", "Tailwind", "React", "Github", "Bootstrap"],
            campus: "bahadurabad head office",
            course:"web and app development",
            timings : "07:00 PM to 09:00 PM"
        },
        {
            id: 2,
            name : "hassan",
            fatherName  : "rizwan",
            skills : ["HTML", "CSS", "Javacript",  "Github", "Bootstrap"],
            campus: "bahadurabad head office",
            course:"web and app development",
            timings : "09:00 AM to 11:00 AM"
        },
    ]




// let userObj = {

//     // key value pair

//     email : "codermhasan@gmail.com", 
//     userName : "hasanCoder66"
// }


// dot notation
// ==>  .propertyName

// bracket notation  ==> ["property name"]

// console.log("User Object --> ",userObj["email"]);



// console.log(`My user name is ${userObj.userName}. user email is ${userObj.email}`);




// let car = {
//     // [ ], true | false, string , Number, null, undefined

// name : "lc 300",
// numberPlate : 12,
// automatic : true,
// model : 2024,
// colors: ["black","white","gray"],


// startCar : function start (){
//     console.log(`${car.name} ko start keroo...`);
// },

// stopCar : function (){
//     console.log("car ko band kerdo...");
// }

// }

// car.startCar()

// var startCar = function (){
//     console.log("car start keroo...");
// }


// startCar()



// shaadi.com

let user = {
firstName: "muhammad",
lastName : "Saleem",
email : "saleem@gmail.com",
isMarried : true,
childrens : ["ali", "hoorain","aman","maryam","shakoor","shabbir","shayan"],
gender:"male",
profession  :"mechanic",
salary : 100000,
address:{
    city:"Karachi",
    country : "Pakistan",
    area : "liaquatabad"
},
age: 45,

}

// let usersArr = [user, user, user, user, user, user, user , user]

// object sai value nikaalny ka kia tareeky kaar hai.. 

// . notation
// [] notation


// array mai sai value nikaalny ka kia tareeky kaar hai..

// square bracket or index number 
// [0]


// console.log(user.firstName.toUpperCase());
// console.log();

// if(user.childrens[1].slice(0,2).toUpperCase() == "ho"){
//     console.log("required element milgaya..");
// }

// if(user.isMarried){
//     console.log("already shaddi shudaa ho");
// }



// let laptop ={
//     name : "hp",
//     price : 50000,
//     isTouch : false,

//     name : () => {
//         console.log("name function hon....");
//     }
// }

// let isTouchPropInLaptop = "isTouch" in laptop
// console.log(isTouchPropInLaptop);
// laptop.isTouch = true

// // delete laptop.name
// delete laptop.price
// // undefined()
// console.log(laptop);




// let userObj ={
// age : 17.5,

// checkAgeWithNormalFn : function (){
//     // console.log("My user age is",userObj.age);

//     console.log("normal function ka this",this.age);
//     // if(userObj.age >= 18){
//     //     console.log("Elegible for CNIC")
//     // }

//     // if(userObj.age <= 17){
//     //     console.log("your are not elegible for cnic");
//     // }
// },


// checkAgeWithArrowFn  : () => {
//     console.log("arrow function ka this",this.age);
// }

// }


// userObj.checkAgeWithNormalFn()
// userObj.checkAgeWithArrowFn()




// let plans = {

//     name : "plans",
//     showPlan : function (){
//     console.log(this.name);
//     },

//     basic : {
//         name : "basic plan",
//             showPlan : function (){
//                 console.log(this.name);}

//     },
//     standard : {
//         name : "standard plan",
//             showPlan : function (){
//                 console.log(this.name);}

//     }


// } 

// plans.standard.showPlan()


// function start(){
//     console.log("app running -->", this);
// }


// const arrowFn = () => {
//     console.log(this);
// }
// arrowFn()


