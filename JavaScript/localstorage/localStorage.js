localStorage.setItem("usersArr", JSON.stringify([{
    name:"ali"
}]))

let data = JSON.parse(localStorage.getItem("usersArr"))
console.log(data);


// let kuchBi = {
//   abc :  function  (){}
// }