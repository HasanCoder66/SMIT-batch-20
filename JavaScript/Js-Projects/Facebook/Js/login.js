let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")


let dummyUsers = [

    {
        fullName : "abdul wahi",
        email:"abdulwahid12348@gmail.com",
        password : "12345678"
    },
    {
        fullName : "fayyan hussain",
        email:"fayyanhr@gmail.com",
        password : "qwertyuiop"
    },
    {
        fullName : "umair",
        email:"umair@gmail.com",
        password : "12345678"
    },
    

]

function loginHandler () {
    let isEmailExist = null;
    let currentUser = null;
    console.log("login handler chlaaa ==>")

    if(!email.value.trim() || !password.value.trim()){
        return sweety("error", "Oops", "Please fill all the fields")
    }
       // authenticate

    for(let i = 0; i < dummyUsers.length; i++){
        
        // console.log(dummyUsers[i].email == email.value);
        if(dummyUsers[i].email == email.value){
            console.log(dummyUsers[i].email == email.value);
            isEmailExist = true

            if(isEmailExist && dummyUsers[i].password == password.value){
                currentUser = dummyUsers[i]
                break;
            }
        }
    }

    if(!isEmailExist || !currentUser){
        return sweety("error","Oops","Invalid Credentials!")
    }



     if(currentUser){
        console.log("fayyan bhii",currentUser);
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