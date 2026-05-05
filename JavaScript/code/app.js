// 05-05-2026 Start ==>

    // Chapter 56 onwards
    // Dcument Object Model (DOM) ==>


        // let allH1Tags = document.getElementsByTagName("h1")
        // console.log(allH1Tags)



        // let documentKaPehlaH1 = document.getElementsByTagName("h1")[1]
        // console.log(documentKaPehlaH1)
        
    //     setTimeout(() => {
    //         documentKaPehlaH1.innerText = "bohat garmi hai aaj..."
    //         documentKaPehlaH1.style.backgroundColor = "red"
    // }, 2000)




    let allPTags = document.getElementsByTagName("p")
    // console.log(allPTags)

    // technique 1 
    // allPTags[0].style.color = "red"
    // allPTags[1].style.color = "red"
    // allPTags[2].style.color = "red"
    // allPTags[3].style.color = "red"
    // allPTags[4].style.color = "red"


    // technique 2

    // loop ke through 


    // for (let i = 0; i < allPTags.length; i++){
    //     allPTags[i].style.color = "yellow"

    //     if(allPTags[i].id == "three"){
    //         allPTags[i].style.color = "pink"
    //     }
    // }


    // let thirdElem = document.getElementById("three")
    // // console.log(thirdElem)

    // thirdElem.style.fontSize = "20px"


    // parent Element ===========>

        let parentElem = document.getElementById("parent")

        // console.log(parentElem.parentNode.previousSibling.previousSibling.lastChild.previousSibling)
        // console.log(parentElem.firstChild.nodeType)

        // console.log(parentElem.children[0].innerText)
        // console.log(parentElem.children[0].firstChild)


        // let text = document.createTextNode("han jani kia haal")
        // console.log(parentElem.children[1].nodeValue)



// Reuseable component
//     function h1Return (text ){
//         return `<h1>${text}</h1>`
//     }

//    console.log( h1Return("han janiii.."))
//    console.log( h1Return("kuch biiiii"))

// Chapter 56 onwards
// 05-05-2026 End ==>








// // 02-05-2026 Start ===>

//     // Dcument Object Model (DOM) ==>

//     // DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//     let doc = document

//     console.log(doc.childNodes[1].childNodes)


//     // let arr = [12, 34]

//     // console.log(arr[0])





// 02-05-2026 End ===>







// // 30-04-2026 Start ===>

//     // Chapter 52 onwards 

// // let imageTag = document.getElementById("image")

//     // function updateImg (e){
// // console.log(e.target.src )
// // console.log("kuch likh diyaa...")
// // imageTag.src = "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
// // console.log(image.classList)
// // image.className +=" "+ "jani"
// // image.className += " FLEX"

// // console.log(image.className)

//     // }







//     // function prevImg() {
//     //     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s"
//     // }



// // let btn = document.getElementById("btn")
// // let clickBtn = document.getElementById("click")
// // let allPTags = document.getElementsByTagName("p")
// // console.log(allPTags)
// //     function noneFn() {
        
//         // console.log("Before ==> class",image.className)
//         // image.className += " hidden"
//         // console.log("After =======> class",image.className)


//         // Style ==>

//             // btn.style.backgroundColor = "blue"
//             // btn.style.color= "white"
//             // btn.style.border= "none" 
//             // btn.style.borderRadius= "10px" 
//             // btn.style.padding= "10px" 

//             // btn.classList.add("hidden")
//             // clickBtn.classList.remove("hidden")
//             // allPTags[2].style.backgroundColor = "#6851ff"
//             // allPTags[2].style.color = "#fff"
//             // allPTags[2].innerHTML = `<h1>jani</h1>`
//     // }



// // 30-04-2026 End ===>



// // 28-04-2026   START ==>
// // console.log("js is running ==>")



// // let username = document.getElementById("username")
// // let email = document.getElementById("email")

// // function submitHandler(e) {
// //     e.preventDefault()
// //     // console.log("submit handler ==> ", e)

// //     // console.log(username.value)
// //     // console.log(email.value)

// //     if(!email.value.trim() || !username.value.trim()){
// //         sweetAlert()
// //     }else{
// //         console.log("form submitted ==>"  )
// //     }


    
// // }


// // function sweetAlert(){
// //     Swal.fire({
// //   icon: "error",
// //   title: "Oops...",
// //   text: "both fields are required",
// // });
// // }


// // let age = 12;

// // // if(age > 18){
// // //     console.log("elegible for cnic")
// // // }


// // let expand = document.getElementById("expand")
// // let paragraphElem = document.getElementById("paragraph")
// // let para  = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi officiis ut minus"




// // paragraphElem.innerText = para.slice(0,20)
// // function expandHandler (){


// //     if(expand.innerText == "see more"){
// //         paragraphElem.innerText = para
// //         expand.innerText = "see less"
// //     }else{
// //         paragraphElem.innerText = para.slice(0,20)
// //         expand.innerText = "see more"
    
// //     }
    
        

    

    
// //     console.log("expand chl raha hai...",)
// // }


// let image = document.getElementById("image")

// // function pictureGayebKerdo (){
// //     image.className += " " +"hidden"
// //     image.className += " " +"jani"
// // console.log("function chlaa ==>")
// // }


// function swappingImage () {
//     image.src = "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk="
// }

// function clearImage () {
//     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSS0Iv5z_vlEtxEbVcc2M5pijthz-FZPl9g&s"
// }


// // 28-04-2026   END ==>

