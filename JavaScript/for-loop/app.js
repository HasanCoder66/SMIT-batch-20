// console.log("js file is running -->")

//

// keyword, round bracket,   curly bracket
// execution

// start , end , change
// initialization, condition, increment || decrement

// for (let i = 1; i <= 10000; i++) {
//     console.log("hello", i)
// }

// for(let i = 100; i > 0; i--){
//     console.log("hello", i)
// }

let students = ["Naveed", "Hasan", "Fayyan", "Shahrukh", "Saim", "Umair"];

// console.log(students.length)

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])
// console.log(students[4])
// console.log(students[5])

// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu" , "Karachi"];

// let cleanCity = "Great Falls"

// for(let i =0; i < cleanestCities.length; i++){
//     if(cleanCity == cleanestCities[i]){
//         console.log("It's a clean city!")
//     }else {
//         console.log("clean kerlo city ko!")
//     }
// }

// let users = ["recruiter","canidate","manager","Admin","Super Admin"];

// let isAdmin = "no";

// for(let i = 0; i < users.length; i++){
//     // console.log("Hamara User ==> ",users[i])
//     if("Admin" == users[i]){
//     isAdmin = "yes"
//     break;
//     }
//     console.log(users[i])
// }

// if(isAdmin == "yes"){
//      console.log("Access Dashboard")
//         console.log("Allow Access Every where")
// }

// for loop table
// let tableNum = 20
// for(let i = 1; i <= 10; i++){
//     console.log(tableNum,"X",i,"=", tableNum * i)
// }

/// ===> REVISION LOOP & NESTED LOOP

// start , end , change

// vairable initialization, condition; increment || decrement

// for(let i = 0;  i < 5; i++){
//     console.log("hello!", i)
// }

// let items = ["samosa","roll","paratha","chatni","kachori","lazania","kathiya wari choly"
// ];
// console.log(items)

// console.log(items[0])
// console.log(items[1])
// console.log(items[2])

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i])
// }

// let users = ["hasan", "fayyan","sharik"];

// for(let i = 0; i < users.length; i++){
//     console.log(users[i])
// }

// let tableNum = 20;

// for(let i = 1; i<=10; i++){
//     console.log(tableNum, "X" , i, "=", tableNum * i)
// }

// console.log(tableNum, "X" , 2, "=", tableNum * 2)
// console.log(tableNum, "X" , 3, "=", tableNum * 3)
// console.log(tableNum, "X" , 4, "=", tableNum * 4)
// console.log(tableNum, "X" , 5, "=", tableNum * 5)
// console.log(tableNum, "X" , 6, "=", tableNum * 6)
// console.log(tableNum, "X" , 7, "=", tableNum * 7)
// console.log(tableNum, "X" , 8, "=", tableNum * 8)
// console.log(tableNum, "X" , 9, "=", tableNum * 9)
// console.log(tableNum, "X" , 10, "=", tableNum *10)

let multiDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(multiDimensionalArray[0][2])
// console.log(multiDimensionalArray[0][2])

// for (let i = 0; i < multiDimensionalArray.length; i++){
// // console.log(multiDimensionalArray[i])

// for(let j = 0 ; j < multiDimensionalArray[i].length; j++){
//     console.log(multiDimensionalArray[i][j])
// }
// }

// let studentNamesArr = [["fayyan","hasan"], ["shahrukh","naveed"]]

// for(let i = 0 ; i < studentNamesArr.length; i++){

//     for(let j = 0; j < studentNamesArr[i].length; j++){
//         console.log(studentNamesArr[i][j])
//     }
// }

// for(let i = 0; i < 3; i++){

//     ///
//     // console.log(i)
//     // console.log("hey hasan")

// // for(let j = 0; j < 5; j++){
// //     console.log("i ==>", i, "j ==>",j)
// // }

//     ////
// }

// let num = [12,22,"hassan"]
// console.log(num)

// console.log(num.pop())
// console.log(num.unshift("ali"))

// let nums = [2,5,6,1,]
// console.log(nums.reverse())

// let strArr = ["kuchbi", "none" , "bekar"]

// let sliceArr = strArr.slice(-2)
// console.log("kia modify howa ==> ",strArr)

// console.log("Copy ki -->",sliceArr)

// let strArr = ["kuchbi", "none", "bekar", "ali", "hasan"];

// let emptyArr = []

// let spliceArr = emptyArr.splice(0,1,"12", "14", 16)

// // let spliceArr = strArr.splice(0,1)
// console.log("kia modify howa ==> ",emptyArr)   // [12,14,16]

// console.log("emptyArr -->",spliceArr)   // []

// start , end, chnage
// initialization, condition, increment || decrement

// let bekarMilgaya = false;

// for (let i = 0; i < strArr.length; i++) {
//   // console.log(strArr[i])
//   if (strArr[i] == "bekar") {
//     bekarMilgaya = true;

//     break;
//   }
// }

// if (bekarMilgaya) {
//   console.log("bekar sahab aap agya");
// }


// for(let i = 100 ; i > 0; i--){
    
//     for(let j = 10 ; j > 0; j--){
    
//     console.log(i, j)
   
// }
   
// }



// for(let i = 1; i < 11; i++){
//   console.log(i * 8)
// }


// for (let i = 10 ; i >= 1 ; i--){
//   console.log(i)
// }



// statring ,      ending   , changes 
// initialization, condition, increment | decrement


// let requriredUserMila = false;

// let studentsArr = [
// "shariq", "hassan","mubasshir"
// ]


// for (let i = 0 ; i < studentsArr.length; i++){
//   console.log(studentsArr[i])
//   if(studentsArr[i] == "hassan"){
//     requriredUserMila = true
//     break
//   }
// }


// if(requriredUserMila == true){
//   console.log("user mera mil gayaa!")
// }






let twoDarray = [
  ["azeem","shakoor"],[12,34]
]

// console.log(twoDarray[0][1].toUpperCase())



// let firstName = "muhammad"
// let lastName = "hasan"


// let fullName = firstName.slice(0,1).toUpperCase() + firstName.slice(1,8) + " " + lastName.slice(0,1).toUpperCase() + lastName.slice(1)

// console.log(fullName)

// console.log(firstName.toUpperCase())



// let paragraph = "my name is salman"


// let arr = paragraph.split(" ")
// let capitalizeArr = []


// // console.log(arr)

// for(let i = 0; i < arr.length; i++){

//   let titleCaseWords = arr[i][0].toUpperCase() + arr[i].slice(1)
//   capitalizeArr.push(titleCaseWords)
  
// }

// let joinReturn = capitalizeArr.join(" ")
// paragraph = joinReturn

// console.log(paragraph)




let randomPara = "suleman hai abdul hai abdul"


// for(let i =0 ; i < randomPara.length; i++){
  
// if(randomPara.slice(i, i+8) == "abdullah"){
//   console.log("abdullah milgayaa!")
//   break;
// }
// }


console.log(randomPara.lastIndexOf("abdul"))




// let arrayHai = ["12",45,56]
// console.log(arrayHai[0].charAt(arrayHai[0].length - 1))


// randomPara = randomPara.replace(/abdul/g,"abdullah")

// console.log(randomPara)