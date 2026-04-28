// console.log("js is running ==>")



// let username = document.getElementById("username")
// let email = document.getElementById("email")

// function submitHandler(e) {
//     e.preventDefault()
//     // console.log("submit handler ==> ", e)

//     // console.log(username.value)
//     // console.log(email.value)

//     if(!email.value.trim() || !username.value.trim()){
//         sweetAlert()
//     }else{
//         console.log("form submitted ==>"  )
//     }


    
// }


// function sweetAlert(){
//     Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "both fields are required",
// });
// }


// let age = 12;

// // if(age > 18){
// //     console.log("elegible for cnic")
// // }


// let expand = document.getElementById("expand")
// let paragraphElem = document.getElementById("paragraph")
// let para  = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi officiis ut minus"




// paragraphElem.innerText = para.slice(0,20)
// function expandHandler (){


//     if(expand.innerText == "see more"){
//         paragraphElem.innerText = para
//         expand.innerText = "see less"
//     }else{
//         paragraphElem.innerText = para.slice(0,20)
//         expand.innerText = "see more"
    
//     }
    
        

    

    
//     console.log("expand chl raha hai...",)
// }


let image = document.getElementById("image")

// function pictureGayebKerdo (){
//     image.className += " " +"hidden"
//     image.className += " " +"jani"
// console.log("function chlaa ==>")
// }


function swappingImage () {
    image.src = "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
}

function clearImage () {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSS0Iv5z_vlEtxEbVcc2M5pijthz-FZPl9g&s"
}