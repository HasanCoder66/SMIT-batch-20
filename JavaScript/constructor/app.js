let user = {
  name: "fayyan",
  age: 25,
  email: "qwertyyo@gmail.com",
  password: "12345678",
};

let user2 = {
  name: "shahrukh",
  age: 25,
  email: "qwertyyo@gmail.com",
  password: "12345678",
};

let usersArr = [
  {
    name: "shahrukh",
    age: 25,
    email: "qwertyyo@gmail.com",
    password: "12345678",
    printUserName : function (){
        // console.log(this.name);
        return usersArr[0].age
    }
  },
  {
    name: "fayyan",
    age: 25,
    email: "qwertyyo@gmail.com",
    password: "12345678",
  },
];




// console.log(usersArr[0].printUserName());



// function foo (){

// }


// let foo2 = function (){}



// function abc (a){
//     console.log(a);
    
// }


// abc("hasan")
// abc("abdullah")



// function User (name, age, email){
//     // console.log(name, age, email);
    
//     this.username = name
//     this.age =age
//     this.email = email
// }

// let u1 = new User("shahrukh", 25, "shahrukh@gmail.com")
// let u2 = new User("fayyan", 28, "fayyanhussain@gmail.com")

// console.log("user 1 ==>", u1);
// console.log("user 2 ==>", u2);




// function BottleMaker (brand, material, price){
//     this.brand = brand
//     this.material = material
//     this.price = price
// }

// let b1 = new BottleMaker("Aquafina", "plastic", 100)
// let b2 = new BottleMaker("Red bull", "metal", 500)



// console.log("bottle 1 ==>", b1);
// console.log("bottle 2 ==>", b2);



// function Plan (name,price, data, mints){
//     console.log(mints);
    
//     this.planName = name
//     this.price = price
//     this.data = data
//     this.mints = mints
// }


// let weekly = new Plan("haftawaar", 550, "5GB")
// let montly = new Plan("monthly pro max", 1800, "30GB", 100)

// console.log(weekly);
// console.log(montly);



function Student (name){
    this.stu = name
    this.printStuName = function (){
console.log(this.stu);

const studentName = this.stu

if(!studentName.trim()){
    console.log("please enter a name");
    
}


    }
}



let s1 = new Student("")

console.log(s1);

s1.printStuName()