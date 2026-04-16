let username = document.getElementById("name")
let userEmail = document.getElementById("email")
let userPass = document.getElementById("password")
let userNum = document.getElementById("number")


function submitHandler(){

    if(!username.value || !userEmail.value || !userPass.value || !userNum.value) {
        return alert("all fields are required")
    }

console.log("username ==>",username.value)
console.log("userEmail ==>",userEmail.value)
console.log("userPass ==>",userPass.value)
console.log("userNum ==>",userNum.value)
}

