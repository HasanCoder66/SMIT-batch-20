// console.log("js is running -->");

// esa function jo apny arguement 1 ya ussy ziada function as a arguement accept kery ya function return kery higher order function kehlata hai..

// function displayName (cb){
// console.log("call back function -->", cb);

// cb("arham")

// }

// displayName(function (name){
//     console.log("my username is: ",name);

// })

// const apiCall = async () => {
//     // let apiRes = "han jani kesy ho...."
//     let apiRes = await fetch("https://dummyjson.com/users")
//     let data = await apiRes.json()

//     // console.log("data --->",data);

//     return data

// }

// let signupHandler = (cb) => {
// // console.log(cb);
// let data = cb()

// console.log("singup handler mai data recieve kia...", data);

// }

// signupHandler(apiCall)

// let students = ["abdullah", "sufiyan", "talha","arham","asad"];

// function start(printName){

//     for (let i =0 ;i  < students.length; i++){
//         // console.log(students[i]);
//         printName(students[i])
//     }

// }

// function print (student){
// console.log(student);

// }

// start(print)

// let nums = [12,34,56,78]
// nums.forEach((n) => {
//     console.log(n);

// })

// forEach

// let returnForEach = students.forEach(function (student) {
// // console.log("my student -->", student);

// return student
// })

// console.log(returnForEach);

// let nums = [12,34,56,78]
// let returnElem = []

// nums.forEach((n) => {
//     if(n > 50){
//         returnElem.push(n)
//     }
// })

// console.log(returnElem);

// map

// let students = ["abdullah", "sufiyan", "talha","arham","asad"];

// let h1forHTML = students.map((stu) => {
//     console.log(stu);

//     return `<h1>${stu} jani </h1>`

// })

// // document.body.innerHTML = h1forHTML.join("")

// // console.log("map return -->", returnofMap);
// console.log(students);

// let values = [12,52,41,76,95];

// let filteredValues50Plus = values.filter((val, i) => {
// // console.log("index -->",i);
// // console.log("value -->",val);
// if(i % 2 == 0){
//     // console.log(val);
//     return val

// }

// })

// console.log(filteredValues50Plus);
// console.log(values);

// for (let i =0; i < 10; i++){

//     if(i % 2 == 0){
//         continue
//     }

//     console.log(i);
// }

// let users = [
//     { name: "saim", age: 18, email: "saim@gmail.com" },
//     { name: "fayyan", age: 35, email: "fayyan@gmail.com" },
//     { name: "fassam", age: 18, email: "fassam@gmail.com" }
// ];


// let findUser = users.find((user) => {
//     // console.log(user.name);

//     // if(user.name == "saim" && user.email == "saim@gmail.com"){
//     //     console.log("saim milgaya...",user);

//     //     return user
        
//     // }
//     if(user.age >= 18){
//         return user
//     }


// })

// console.log(findUser);


// reduce 
// let carItem = [
//     {productName:"paani", quantity : 2},
//     {productName:"mouse", quantity : 5},
//     {productName:"ac", quantity : 1},
// ]


// let totalQty = carItem.reduce((prevVal, currentVal) => {
//     return prevVal + currentVal.quantity
    
// },0)

// console.log(totalQty);





