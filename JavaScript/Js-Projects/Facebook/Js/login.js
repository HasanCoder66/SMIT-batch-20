let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")


// let user = ""

function loginHandler () {
    console.log("login handler chlaaa ==>")

    if(!email.value.trim() || !password.value.trim()){
        return console.log("all fields are required")
    }

    // if(user){
    //     console.log("user milaa")
    // }else{
    //     console.log("user nhi milaaa")
    // }


    console.log(email.value)
    console.log(password.value)
}