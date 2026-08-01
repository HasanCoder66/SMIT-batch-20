// console.log("js is running -->");


// api calling 
// async await


const apiCall = async () => {
    try {
        
       const response = await fetch("https://dummyjson.com/users")       
       const result = await response.json()
       

    //  return result
       
    } catch (error) {
       console.log(error);
        
    }
}

apiCall()

 
// fetch("https://dummyjson.com/users")
// .then((res) => res.json())
// .then((data) => {
//     const {users} = data;

//     console.log(users);

//     users.map()
    
// })


// Rest Operator

// ... 


// let fruits = ["apple", "banana", "orange", "grapes"];


// let bohatsaryFruits = ["watermelon", ...fruits]
// console.log(bohatsaryFruits);

// const [apple, banana, orange, ...other] = fruits

// console.log(other);


// let bottle = {
//     material : "plastic",
//     price: 50,
//     name : "pani ki bottle",
//     additionalInfo : {
//         quantity : "330 ml",
//         netVolume : "330 ml",
//         jani : [1,2,3,]
//     }
// }


// let bottle2 = {
// ...bottle,
// name : "coldrink ki bottle"
// }

// console.log(bottle2);



// const {material, ...others} = bottle
// console.log(others);




// Destructuring 
// 

// let bottle = {
//     material : "plastic",
//     price: 50,
//     name : "pani ki bottle",
//     additionalInfo : {
//         quantity : "330 ml",
//         netVolume : "330 ml",
//         jani : [1,2,3,]
//     }
// }



// const {material, price, additionalInfo} = bottle

// console.log(additionalInfo.jani[1]);



// let students = ["ali", "hasan", "saleem", "abdullah"];

// const stu1 = students[0];
// const stu2 = students[1];



// const [stu1 , stu2, , stu4]  = students;


// console.log(stu1, stu2, stu4);









// let username = "hasancoder";

// // reassign

// username = "hasancoder66";


// const user = {
//     email :"codermhasan@gmail.com"
// }


// user.email = "jani@gmail.com"




// const arrowFn = (n1, n2, n3) => {

//     if(n1 % 2 == 0){
//         console.log("even number");
        
//     }else {
//         console.log("odd number");
        
//     }
    
// }



// const arrowFn = (n1, n2, n3) => {

//     return n1 + n2 + n3
    
// }


// console.log(arrowFn(13, 12, 25));




// one line arrow function

// const arrowFn = (n1, n2, n3) => n1 + n2 + n3

// let nums = [1,2,3,4,5];
// let jaani = document.getElementById("jaani")



// let filteredItems = nums.filter((nums, idx) => {
    
//     if(nums < 3){
//      return nums
        
//     }
    
// })


// console.log(filteredItems);

// jaani.innerHTML = filteredItems.join(" ")


// let cardKePappa = document.getElementById("cardKePappa")


// let data = [
//     {
//         name : "glass",
//         material : "glass"
//     },
//     {
//         name : "bottle",
//         material : "plastic"
//     },
//     {
//         name : "mobile",
//         material : "titanium"
//     },
// ]


// const cardHTML = (item) => {
    
//     return `<div id="card" style="border: 2px solid black;">
//             <h2>Name: ${item.firstName} ${item.lastName}</h2>
//             <h3>Material : ${item.material}</h3>
//         </div>`;
// }

// fetch("https://dummyjson.com/users")
// .then((res) => res.json())
// .then((data) => {
//     const {users} = data;

//     console.log(users);

//   let updatedParentHTML = users.map((item) => cardHTML(item) )
//   cardKePappa.innerHTML = updatedParentHTML.join(" ")
    
// })
// .catch((err) => {
//     console.log(err);
    
// })






// console.log(updatedParentHTML);
