// console.log("file is running -->")

// var user = true;
// var age = 4
// console.log(user)



//  if most important topic of js


// if(age > 4){
//     console.log("admission milgaya")
// }else {
//     console.log("User nhi hai...")
// }


// var guessNum = 0
// var correctNum = 5


// if(guessNum == correctNum){
//     console.log("you won the game!")
// } else if(guessNum - 1 == correctNum){
//     console.log("pleas -1 try kero")
// }else if (guessNum + 1 == correctNum){
//     console.log("please +1 try kero")
// }else {
//     console.log("please try again!")
// }



// var kiaMaiVoteDesektaHon = false;
// let age = 18;
// let isPakistani = false;
// let birthPlace = "Pakistan"
// let cnic = false

// if(birthPlace == "Pakistan"){
//     isPakistani = true;
// }

// if(isPakistani){
//     if(age >= 18){
//     kiaMaiVoteDesektaHon = true
// }else {
//     console.log("barry hoker aou....")
// }
// }

// if(kiaMaiVoteDesektaHon){
//     console.log("aap vote desekty ho")
// }




let dbPassword = "abc";
let userPassword = "foo"
let attempt = 1;


if(dbPassword == userPassword){
    console.log("login successfully")
}

if(dbPassword !== userPassword){
    attempt--
}

if(attempt){
    console.log("password attempt ker raha hon")
}else {
    console.log("you cross daily login limit")
}

console.log(attempt)