// console.log("js is running-->")

// let userName = "HAsan"

// console.log("lower case ==>", userName.toLowerCase())

// console.log("upper case ==>", userName.toUpperCase())

// if(userName.toLowerCase() == "Hasan".toLowerCase()){
//     console.log("condition true hai...")
// }

let paragraph = "My name is hasan ashraf. hasan";

// paragraph.slice(0,1)

// let studentsArr = ["arham", "sufiyan","ashir","fayyan"]
// console.log(studentsArr.slice(0,2))

// console.log(paragraph.lastIndexOf("hasan"))

// console.log(paragraph.slice(11, 16).toUpperCase())

// for (let i = 0 ; i < paragraph.length; i++){
//     console.log(paragraph[i])

//     if(paragraph.slice(i, i+5) == "hasan"){
//         console.log(i)
//         break
//     }
// }

// console.log(paragraph.charAt(0))
// console.log(paragraph[0])

// if(paragraph.includes("hasan")){
//     console.log(paragraph.replace(/hasan/g, "ahsan"))

// }

// let val = 45.45
// console.log(Math.round(val))    // 5 >= 6   // 5 < 4
// console.log(Math.random())

// console.log(typeof val.toFixed())
// console.log( val.toFixed())

// let n1 = "45.45"
// console.log(typeof n1)
// console.log(parseFloat(n1))
// console.log(Number(n1))
// console.log(+n1)

// getting the current date and time

let current = new Date();
let current2 = Date.now();

// console.log(current2 , "current 2 ==>")

let days = ["", "", "سئے شمبے"];
let months = ["jan", "feb", "mar", "اپریل"];

// console.log(months[current.getMonth()])
//
// console.log(days[current.getDay()])
// console.log(current.toString().slice(0,15))
// console.log(current.slice (0,15))

// console.log(current.getTime())

// Revision 31 to 40

// console.log( current.toString().slice(0,15))

// let dob = new Date(2008, 8, 19, 19, 15, 6)
// let current3 = new Date()

// dob.setHours(12)
// dob.setMinutes(12)
// dob.setSeconds(12)
// dob.setFullYear(2008)
// dob.setMonth(8)
// dob.setDate(19)
// console.log(current3.getFullYear() - dob.getFullYear())
// console.log(dob)

// function keyword | function name | function parenthesis | function scope | curly brackets | block

// let n1 = 12;
// let n2 = 12;

// console.log(n1 + n2)

// function normal () {
//     console.log("hello world")
// }

// normal ()

// arguements --> esi jagah jahan sai values bheji jayegi...
// parameters --> esi jagah jahan values recieve ki jayegi...

// parameters a = 12, b = 12
function sum(a, b) {
  console.log(a + b);
}

sum(12, 12); // arguements 12 ,12
sum(12, 12); // arguements 12 ,12

let user = false;
let userEmail = "codermhasan@gmail.com";
let userPass = "12345678";

let correctEmail = "codermhasan@gmail.com";
let correctPass = "12345678";
// let userEmail
// let userPass

function login(email, password) {
  // console.log(userPass)
  if (!email || !password) {
    return alert("all fields are required!");
  }

  if (userEmail == email && userPass == password) {
    user = true;
  }

  if (!user) {
    return;
  }

  if (user) {
    alert("user login successfully!");

    window.location.href = "dashboard.html";
  }
  console.log(user);

  console.log("login handler working -->");
}

function logout() {
  user = false;

  console.log(user);
  if (!user) {
    window.location.href = "index.html";
  }
}

// let dice = Math.floor(Math.random() * 7);

// console.log("Dice ===>",dice)
// switch (dice) {
//   case 0:
//     console.log("0");
//     break;

//   case 1:
//     console.log("1");
//     break;

//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;

//   case 4:
//     console.log("4");
//     break;

//   case 5:
//     console.log("5");
//     break;
//   case 6:
//     console.log("6");
//     break;
// }



let userRole = "" // admin | user
let h1 = document.getElementById("text")


switch (userRole){
    case "recruiter":
        h1.innerHTML = "Recruiter Dashboard"
        break;
    
        case "admin":
        h1.innerHTML = "Admin Dashboard";
        break;

        default:
        h1.innerHTML = "User Dashbaord"


}