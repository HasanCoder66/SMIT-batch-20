// console.log("js is running-->")


// let userName = "HAsan"



// console.log("lower case ==>", userName.toLowerCase())

// console.log("upper case ==>", userName.toUpperCase())


// if(userName.toLowerCase() == "Hasan".toLowerCase()){
//     console.log("condition true hai...")
// }



let paragraph = "My name is hasan ashraf. hasan"

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


let current = new Date()
let current2 = Date.now()

console.log(current2 , "current 2 ==>")
let days = ["", "", "سئے شمبے"]
let months = ["jan", "feb","mar","اپریل"]

console.log(months[current.getMonth()])

console.log(days[current.getDay()])
// console.log(current.toString().slice(0,15))
// console.log(current.slice (0,15))

// console.log(current.getTime())