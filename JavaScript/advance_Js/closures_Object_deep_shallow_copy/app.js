console.log("js is running -->");


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



    console.log("new object ->", user2);
    console.log("old object ->", obj);
    




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
