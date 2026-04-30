// 30-04-2024 End ===>

    // Chapter 52 onwards 

// let imageTag = document.getElementById("image")

    // function updateImg (e){
// console.log(e.target.src )
// console.log("kuch likh diyaa...")
// imageTag.src = "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
// console.log(image.classList)
// image.className +=" "+ "jani"
// image.className += " FLEX"

// console.log(image.className)

    // }







    // function prevImg() {
    //     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s"
    // }



let btn = document.getElementById("btn")
let clickBtn = document.getElementById("click")
let allPTags = document.getElementsByTagName("p")
console.log(allPTags)
    function noneFn() {
        
        // console.log("Before ==> class",image.className)
        // image.className += " hidden"
        // console.log("After =======> class",image.className)


        // Style ==>

            // btn.style.backgroundColor = "blue"
            // btn.style.color= "white"
            // btn.style.border= "none" 
            // btn.style.borderRadius= "10px" 
            // btn.style.padding= "10px" 

            // btn.classList.add("hidden")
            // clickBtn.classList.remove("hidden")
            allPTags[2].style.backgroundColor = "#6851ff"
            allPTags[2].style.color = "#fff"
            // allPTags[2].innerHTML = `<h1>jani</h1>`
    }



// 30-04-2024 End ===>



// 28-04-2026   START ==>
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


// 28-04-2026   END ==>

