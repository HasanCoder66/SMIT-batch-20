
// modules --> 

let laptop = "Hp wala laptop"


export var one = 1;

function foo (arg){
    console.log(arg);

    
    return arg + 56
}


export { foo}

// export default laptop
// export default lapto2

let arrOfObj = [
    {
        name:"hasan",
        age: 23,
        email :"codermhasan@gmail.com"
    },
    {
        name:"shariq",
        age: 18,
        email :"shariq@gmail.com"
    },
    {
        name:"hasan",
        age: 23,
        email :"codermhasan@gmail.com"
    },
    {
        name:"shariq",
        age: 18,
        email :"shariq@gmail.com"
    },
]

export default arrOfObj

// // localStorage.setItem("name", "hasan")

// // localStorage.setItem("users", JSON.stringify(arrOfObj))


// let users = JSON.parse(localStorage.getItem("users"))
// // console.log(users);


// // map 

// let mapReturn = users.map((u,i) => {
//     // return {...u, name: u.name.toUpperCase()}
//     // if(u.name == "hasan"){
//     //     return u
//     // }

//     console.log(i);
// })

// console.log(mapReturn);