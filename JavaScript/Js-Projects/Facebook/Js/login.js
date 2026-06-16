let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")
let eyeIcon = document.querySelector(".fa-solid")



// let dummyUsers = [

//     {
//         fullName : "abdul wahi",
//         email:"abdulwahid12348@gmail.com",
//         password : "12345678"
//     },
//     {
//         fullName : "fayyan hussain",
//         email:"fayyanhr@gmail.com",
//         password : "qwertyuiop"
//     },
//     {
//         fullName : "umair",
//         email:"umair@gmail.com",
//         password : "12345678"
//     },
    

// ]

let allUsers = JSON.parse(localStorage.getItem("allUsers"))
let currentUser = null;

localStorage.setItem("currentUser" , JSON.stringify(currentUser))
// console.log(allUsers);


function loginHandler () {
    let isEmailExist = null;
    
    console.log("login handler chlaaa ==>")

    if(!email.value.trim() || !password.value.trim()){
        return sweety("error", "Oops", "Please fill all the fields")
    }
       // authenticate

    for(let i = 0; i < allUsers.length; i++){
        
        // console.log(dummyUsers[i].email == email.value);
        if(allUsers[i].email == email.value){
            console.log(allUsers[i].email == email.value);
            isEmailExist = true

            if(isEmailExist && allUsers[i].password == password.value){
                currentUser = allUsers[i]
                console.log("current user -->",currentUser);
                localStorage.setItem("currentUser", JSON.stringify(currentUser))
                
                break;
            }
        }
    }

    if(!isEmailExist || !currentUser){
        return sweety("error","Oops","Invalid Credentials!")
    }



     if(currentUser){
        // console.log("fayyan bhii",currentUser);
         sweety("success", "Okay", "User logged in successfully!")
       
         setTimeout(() => {

             window.location.href = "../index.html"
         }, 1500)
       
      }


 
    //   email.value = ""
    //   password.value = ""


    


    // console.log("is Email in array -->", isEmailExist);
    // console.log("current Use -->", currentUser);


}

function sweety (icon,title,text) {
    return Swal.fire({
      icon,
      title,
      text,
    });
    }


    function toggleEye (){
        // console.log("toggle eye function chlaaa -->", password.type)
        if(password.type == "password"){
            password.type = "text"
           eyeIcon.className = "fa-solid fa-eye-slash"
           return
        }

        if(password.type =="text"){
            password.type = "password"
           eyeIcon.className = "fa-solid fa-eye"
           return
        }
    }