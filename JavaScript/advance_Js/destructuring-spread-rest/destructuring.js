
// let arrayStudents = ["ali", "ashir", "shakoor"];


// console.log(arrayStudents[0]);
// console.log(arrayStudents[arrayStudents.length -1]);


// const [first, ,second] = arrayStudents;
// console.log(first);
// console.log(second);




// const user = {
//     email : "codermhasan@gmail.com",
//     password : "13279464",
//     age: 12,
//     address:{
//         city: "karachi",
//         country :"pakistan"
//     },
//     skills: ["html", "css", "javascript"]
// }


// const {email, password, age, address, ...others} = user;

// console.log(others.skills);

// const [html, css, js] = others.skills;
// console.log(html, css, js);

// const {age, address} = others
// console.log(age);




// shallow copy -->

// first level copy ==> 


    const user = {
    email : "codermhasan@gmail.com",
    password : "13279464",
    age: 12,
    address:{
        city: "karachi",
        country :"pakistan"
    },
    skills: ["html", "css", "javascript"]
}



// const shallowCopy = {...user};
// const shallowCopy = Object.assign({}, user);
// shallowCopy.email = "abc@gmail.com"
// shallowCopy.address.city = "lahore"


// console.log("shallow copy --->",shallowCopy);
// console.log("my user object -->",user);





// const deepCopy  = structuredClone(user);
// const deepCopy = JSON.parse(JSON.stringify(user))
// // deepCopy.email = "jani@gmail.com"
// deepCopy.address.country = "afghanistan"

// console.log("deepCopy",deepCopy );
// console.log("old user -->", user);



// const user2 = user;

// user2.email = "kuchbi@gmail.com";

// console.log("user 2 -->", user2);
// console.log("old user -->", user);
