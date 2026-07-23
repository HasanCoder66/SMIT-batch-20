// synchronus code
// fetch(`https://dummyjson.com/products`)
// .then((response) => {
//     // console.log(response);
//  return response.json()
// })
// .then((result) => {
//     // console.log(result.products);

//     result.products.map((item, idx) => {
//         console.log(item);

//     })

// })

// console.log("hello");

// console.log("hello");
// console.log("hello");
// console.log("hello");

// asynchronus code

// const todoapi = "https://jsonplaceholder.typicode.com/todos";

// const todos = fetch(todoapi)

// todos.then((response)=>{
//     return response.json();
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// ASYNC/ AWAIT 
// const todoapi = "https://jsonplaceholder.typicode.com/todos";

// async function greeting() {
//   try {
//     const todos = await fetch(todoapi);
//     const result = await todos.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const data = greeting();

// data
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// async function errorFunction() {
//     try {
//         // throw an error to be caught below
//         throw new Error("This is an error");
//     } catch (error) {
//         console.log("Error from catch block :", error.message);
//     }
// }

// errorFunction();