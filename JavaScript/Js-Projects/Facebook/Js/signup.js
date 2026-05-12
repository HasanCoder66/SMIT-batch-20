let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year")
let email = document.getElementById("email")
let password = document.getElementById("password")
let gender = document.getElementsByName("gender")


let allUsers = []
let user = {}
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


function signupHandler(e) {
    // console.log("signup handler is working...")

    e.preventDefault()
    user.firstName = firstName.value
    user.lastName = lastName.value
    // user.dob = `${date.value}-${month.value}-${year.value}`
    user.dob = date.value +"-"+ month.value+"-"+year.value
    user.email = email.value
    user.password = password.value

    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {
            user.gender = gender[i].value
        }
    }

    if (!user.firstName.trim() || !user.lastName.trim() || !user.email.trim() || !user.password.trim() || !user.dob.trim() || !user.gender) {
        return sweety("error", "Oops", "Please fill all the fields")
    }

    if(user.password.length < 8){
       return sweety("error", "Oops", "Password at least 8 characters")
    }

    if(!emailRegex.test(user.email)) {
        return sweety("error","Oops","wrong email")
    }


allUsers.push(user)
firstName.value = ""
lastName.value = ""
// date.value = ""
// month.value = ""
// year.value = ""
email.value = ""
password.value = ""

for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        gender[i].checked = false;
    }
}

// window.location.reload()
    sweety("success", "Ok", "signup successfully")
    // console.log(allUsers)
}





function sweety (icon,title,text) {
return Swal.fire({
  icon,
  title,
  text,
});
}