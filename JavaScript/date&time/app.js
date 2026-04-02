let arr = [34, 2, 99, 67]
// let maxNum = arr[1]

// for(let i = 0 ; i < arr.length; i++){

//     if(maxNum < arr[i]){

//         // console.log(arr[i])

//         maxNum = arr[i]

//     } else {
//         // console.log("else chlaaa ==>")
//     }
// }


// console.log(maxNum)


// const findMax = arr.findLast((item) => item > maxNum)
// console.log(findMax)



// let maxNum = arr[1]


// for(let i = 0 ; i < arr.length; i++){
//     if(maxNum < arr[i]){
//         maxNum = arr[i]
//     }
// }

// console.log(maxNum)






// generate password

// let password = ""

// let passwordText = "!^&*()SDF@#%GH467JKL:QWERT$YUI654689"

// // console.log(randomNum)
// for(let i = 0; i< 8; i++){
//     let randomNum = Math.floor(Math.random() * passwordText.length)
    
//     password +=  passwordText[randomNum]
//     // password = password + passwordText[randomNum]
// }

// console.log(password)



let days = ["Sunday", "Monday","منگل"]

// let month = ["jan","feb","mar"]

// let currentTime = new Date()
// let currentMonthIndex = new Date().getMonth()
// // console.log(currentTime.toString().slice(0,15))

// // console.log(days[currentTime.getDay()])
// console.log(month[currentMonthIndex])




let shariqDob = new Date("July 30 2007")
// // console.log(shariqDob.getDay())


// console.log("shariq paida howa :", days[shariqDob.getDay()])
// console.log("shariq paida howa year:", shariqDob.getFullYear())

// console.log("shariq itny milli seconds ka hai", shariqDob.getTime() / diff)



// let expectedRamadan2027 = new Date("February 7, 2027")
// let currentDate = new Date()


// let remainingTimeInRamadan = expectedRamadan2027.getTime() - currentDate.getTime()


// let diff = 1000 * 60 * 60 * 24 * 30 * 12

// console.log(Math.round(remainingTimeInRamadan / diff))






let currentTime = new Date()


currentTime.setFullYear(2028)
currentTime.setMinutes(20)
currentTime.setDate(20)

console.log(currentTime)





