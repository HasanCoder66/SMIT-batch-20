// console.log("js is running -->");

// Set -->

// let mySet = new Set()

// mySet.add(20)
// mySet.add(40)
// mySet.add(20)

// mySet.delete(20)
// mySet.clear()

// console.log(mySet);

// console.log(mySet.size);


// let fruits = ["apple", "apple", "mango", "orange"]

// let userSameAges = [18,18, 23, 55, 55]

// // let returnSet = [...new Set(fruits)]
// let returnSet =new Set(fruits)
// console.log(returnSet);


// let withoutDuplicateFruitsArr = [...new Set(fruits)]

// let withoutDuplicateUserAges = [...new Set(userSameAges)]
// console.log(withoutDuplicateUserAges);



// let name = 23
// let myMap = new Map();


// myMap.set("name", "hasan")
// myMap.set(() => {}, "mera arrow function...")
// myMap.set("() => {}", "mera dosra arrow function...")
// // console.log(myMap.get("() => {}"));

// myMap.delete("name")
// myMap.clear()





// console.log(myMap.size);
// console.log(myMap);


// let num = 90;


// let anotherNum  = num;

// num = 100
// console.log(num);
// console.log(anotherNum);


// let mobile = {
//     name :"iphone",
//     colors: ["black", "blue", "orange"],
//     price: 150,
//     model : "17 pro max",
//     spces : {
//         ram : "8gb",
//         rom : "256gb"
//     }
// }


// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));
// console.log(Object.entries(mobile));
// console.log(Object.hasOwn(mobile, "description"));
// console.log(Object.freeze(mobile));
// console.log(Object.seal(mobile));




// mobile.name = "samsung"
// mobile.description = "acha wala mobile........"


// console.log(mobile);



// let userObj = {
//     age : 23,
//     name : "jaani",
//     address : {
//         city : "lahore"
//     }
// }

// let user = userObj

// shallow copy -->

// spread operator
// let user = {...userObj}

// object.assign
// let user = Object.assign({}, userObj)


// user.age = 13;
// user.name= "hasan"
// user.address.city = "karachi";


// console.log("user object -->", userObj);
// console.log("user 2 object -->",user);


// deepCopy ==>

    // structuredClone 
    // JSON.parse(JSON.stringify(obj ))


// let deepCopy = JSON.parse(JSON.stringify(userObj))
// let deepCopy = structuredClone(userObj)


// deepCopy.age = 25;
// deepCopy.address.city = "Multan"

// console.log(deepCopy);
// console.log(userObj);






// let Closures = document.getElementById("Closures")
// let btn = document.getElementById("btn")
// let btn2 = document.getElementById("btn2")


// function makeSize (size){
//     return function (){
//          Closures.style.fontSize = `${size}px`
//     }
// }

// const size10 = makeSize(10)
// const size30 = makeSize(30)


// btn.addEventListener("click", size10)
// btn2.addEventListener("click", size30)

// Closures -->

// let count = 236

// function outer (){
//     let count = 23
    
    
//     function inner(){
//         // let count = 12;
//         console.log(count);

//     }

//     inner()
    


// }


// outer()



// function outer (){
// let count = 0;

//     function increment (){
//         count++
//         console.log(count);
        
//     }

//     return increment
// }

// const counter = outer()

// counter()
// counter()
// counter()







// Map | Set


// let myMap = new Map()

// myMap.set("name" , "hasan");
// myMap.set(() => {}, "mera function hai ye...")
// // console.log(myMap.get("name"));
// // console.log(myMap.get("name"));
// // myMap.clear()
// console.log(myMap.has("name"));



// console.log(myMap);
// console.log(myMap.size);


// let nums = new Set()

// nums.add(10)
// nums.add(20)
// nums.add(10)
// nums.add(30)

// nums.delete(10)
// console.log(nums.has(10));
// nums.clear()


// console.log(nums);

// console.log(nums.size);


// let numsArray = [1,2,3,4,4,5,5,6,6];
// // let fruits = ["apple", "apple","orange"]
// let arr = [...new Set(numsArray)]

// console.log(arr);



// Object Keyword and it's Methods 

// keys, entries, values, freeze, seal, assign

// let userObj  = {
//     age  : 13,
//     email : "xyz@gmail.com",
//     passowrd : "12345678"
// }


// const keysofUserObj = Object.keys(userObj)
// const valueofUserObj = Object.values(userObj)
// const entriesofUserObj = Object.entries(userObj)

// Object.freeze(userObj)
// Object.seal(userObj)
// userObj.isAdmin = true;
// userObj.age = 23

// console.log(userObj);



// data types 2 -->

// primitives 
// reference 


// let a = 12;
// let b = a;


// console.log(a);
// console.log(b);

// b = 23

// console.log(b);



// refrence data 

let obj = {
    age  : 13,
    address : {
        city  : "karachi",
        country : "pakistan"
    },
    // address:"purana ghr"
}


// let user2 = obj;
// user2.age = 23

// console.log(obj);


// shallow copy ===> 

    // let user2 = {...obj}

    let user2 = Object.assign({}, obj);
    user2.age = 25;
    user2.address.city = "balochistan"



    // console.log("new object ->", user2);
    // console.log("old object ->", obj);
    




    // deep copy -->

    // let deepCopy = structuredClone(obj);

    // let deepCopy = JSON.parse(JSON.stringify(obj));

    // deepCopy.address.city = "naya ghr"
    // console.log("deep copy -->", deepCopy);
    

    // console.log("old object -->", obj);
    



// function outer (){
    
//     // let username = "abdullah";
//     console.log("Execute -->", username);


//     function inner (){

//         console.log("inner -->", username);
        
//     }


//     inner()

// }

// outer()





// function outer (){
//     let count = 0;

//     function increment (){
//         count++;
//         console.log(count);
        
//     }

//     return increment
// }


// const counter = outer()

// counter()
// counter()
// counter()



// function makeAdder (x){
// return function (y){
// return x + y
// }
// }


// const addTo5 = makeAdder(5)
// const addTo10 = makeAdder(10)

// console.log(addTo5(2));
// console.log(addTo10(5));
