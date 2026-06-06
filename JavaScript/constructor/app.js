// constructor for methods

function Student (name, email, password){
  this.name = name;
  this.email = email;
  this.password = password;

  // this.printStudentDetails = function (){
  //   console.log("student name -->", this.name);
  //   console.log("student email -->", this.email);
  //   console.log("student password -->", this.password);
    
  // }
}

  Student.prototype.printStudentDetails =  function (){
     console.log("student name -->", this.name);
     console.log("student email -->", this.email);
     console.log("student password -->", this.password);
     
    }


let s1 = new Student("ali","ali@gmail.com", '123456789')
let s2 = new Student("fayyan hussain","fayyan@gmail.com", '123456789')
let s3 = new Student("rizwan","rizwan@gmail.com", '123456789')



// s1.printStudentDetails()
// s3.printStudentDetails()


console.log("s1 -->", s1, s1.hasOwnProperty("printStudentDetails"));

console.log("s1 --> ", "printStudentDetails" in s1 );
// console.log(s2, "s2");



// function Abc (username){
// this.username = username
// }


// let a1 = new Abc("shakoor")

// console.log(a1);


// function Human (name, gender, age, weight){
// this.name = name;
// this.gender = gender;
// this.age = age;
// this.weight = weight;
// }


// let h1 = new Human("aslam", "male", 0, "2kg")
// let h2 = new Human("Humaira", "female", 0, "3kg")


// console.log("Human 1 -->", h1);
// console.log("Human 2 -->", h2);



// function MobileMaker (brand, model, ram, rom, screenSize, colors, price){
// this.brand = brand;
// this.model = model;
// this.ram = ram;
// this.rom = rom;
// this.screenSize = screenSize;
// this.colors = colors;
// this.price = price;
// }


// let m1 = new MobileMaker("samsung", "A35", "8GB", "128GB", "5.5 inch", ["black","white","golden"], 109000)
// let m2 = new MobileMaker("iphone", "xr", "12GB", "256GB", "4 inch", ["black","white","golden"], 55000)

// console.log("M1 ==>", m1);
// console.log("M2 ==>", m2);



// function shirtMaker (brand, type, sizes, colors, price){
// this.brand = brand;
// this.type = type;
// this.sizes = sizes;
// this.colors = colors;
// this.price = price;
// }


// let s1 = new shirtMaker("j.", "chkeck", ["s","m","l","xl","xxl"], ["black", "white", "navy blue", "olive green", "bottle green"], 1200)
// let s2 = new shirtMaker("j.", "formal", ["s","m","l","xl","xxl"], ["black", "white", "navy blue", "olive green", "bottle green"], 2000)

// console.log("s2 --> ", s2);


// let user = {
//   name: "fayyan",
//   age: 25,
//   email: "qwertyyo@gmail.com",
//   password: "12345678",
// };

// let user2 = {
//   name: "shahrukh",
//   age: 25,
//   email: "qwertyyo@gmail.com",
//   password: "12345678",
// };

// let usersArr = [
//   {
//     name: "shahrukh",
//     age: 25,
//     email: "qwertyyo@gmail.com",
//     password: "12345678",
//     printUserName : function (){
//         // console.log(this.name);
//         return usersArr[0].age
//     }
//   },
//   {
//     name: "fayyan",
//     age: 25,
//     email: "qwertyyo@gmail.com",
//     password: "12345678",
//   },
// ];




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



// function Student (name){
//     this.stu = name
//     this.printStuName = function (){
// console.log(this.stu);

// const studentName = this.stu

// if(!studentName.trim()){
//     console.log("please enter a name");
    
// }


//     }
// }



// let s1 = new Student("")

// console.log(s1);

// s1.printStuName()