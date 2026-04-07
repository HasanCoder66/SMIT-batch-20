// Functions ==> ?



// function sum (){

//     console.log(12 + 12)
// }


// sum()
// sum()


// function greet(username){
// console.log("Hello User! " + username)
// }

// greet("Muhammad Hasan") /// arguements


// console.log("Hello")



// keyword | function name | parentheses or round brackets | curly brackets


// function foo (){  // block of code
// function body || execution | logic | implentation

// }


// block of code kab execute hota hai ?
// jab aap function ko call kerty hai ya phir invoke


// get time function


// function getTime () {
//     let now = new Date()

//     let getHour = now.getHours()
//     let getMins = now.getMinutes()

//     console.log("Current Time: " + getHour + ":"+ getMins)
// }

// getTime()




// // parentheses | parameters 
// function abc (n1, n2,n3) {
// console.log(n3)
// }


// abc(12,33,44) //parentheses | arguements




    // function foo(a,b,c){
    // console.log("Hello "+ a)
    // }

    // let username = "Muhammad hasan"
    // foo(username)



    // let result = 



    // function abc (){
    //     return "Hasan"
    // }


    // let username = abc()
    // console.log(username + " " + "Ashraf")



// Return Examples ==> 
// let arr = [1,2,3]

// let pushReturnVal = arr.push("jani")

// console.log(pushReturnVal + 6)


let paragraph = document.getElementById("showPass")
console.log(paragraph)
let passCharacters = "@#$%^&*()ASDFjklgasdfGHJ45asdafd465KLQWER12345TYU"


function randomGeneratePassword (){
    let password = ""
for(let i =0 ; i < 8; i++){
    let randoNum = Math.floor(Math.random() * passCharacters.length)
    // password = password + passCharacters[randoNum]
    password += passCharacters[randoNum]
}   

paragraph.innerHTML = password
}

// randomGeneratePassword()