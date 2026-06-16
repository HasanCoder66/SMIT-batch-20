

let postContainer = document.querySelector(".postContainer");

let description = document.getElementById("description")
let image = document.getElementById("file")

let leftSidebar = document.querySelector(".leftSidebar")
let chats = document.querySelector(".chats")
let friendsChats = document.getElementById("chattu")
let onlineIcon = document.querySelector(".online")


// current user -->
let currentUser = JSON.parse(localStorage.getItem("currentUser"))

// dummy data..

let groupsAndPages = [
  {
    title: `${currentUser.firstName} ${currentUser.lastName}`,
    img: "https://avatars.githubusercontent.com/u/140997677?v=4"
  },
  {
    title: 'Meta AI',
    img: "https://downloadr2.apkmirror.com/wp-content/uploads/2026/03/29/69d65519bc338_com.facebook.stella.png"
  },
  {
    title: 'Friends',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91zLrxeVetcQjZJnCgJc3VeUOyvUGNOJYxA&s"
  },
  {
    title: 'Saved',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4APa7AR_Kp66o03ANueqh9fl8JlhxX_b3w&s"
  },
  {
    title: 'Events',
    img: "https://images.freeimages.com/image/thumbs/eca/flat-star-icon-png-style-5707936.png"
  },
  {
    title: 'Ads Manager',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdO935i7RKu-e-BQQDKzauNLz28emm4eaHw&s"
  },
  {
    title: 'Games',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavS21MpD3qj3IIDijdmN1MeWgOGrYOOsMvg&s"
  },
  {
    title: 'Messenger',
    img: "https://cdn.iconscout.com/icon/free/png-256/free-facebook-messenger-icon-svg-download-png-3357700.png"
  },

]


let friends = [
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    isOnline : true
  },
  {
    name : "shariq",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    isOnline : true,
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
  {
    name : "Sarim",
    img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
  },
]

// let currentUser = {
//         fullName : "abdul wahid",
//         email:"abdulwahid12348@gmail.com",
//         password : "12345678"
//     }



function postHandler () {

    const file = image.files[0] 

    if(file){

      var imageUrl = URL.createObjectURL(file) 
  
      console.log(imageUrl);
    }

    console.log("mera post handler chlaa -->")
    

    postContainer.innerHTML += `<!-- single post -->
    <div class="post mb-4">
    
      <!-- post header -->
      <div class="postHeader  d-flex justify-content-between align-items-center px-4">
        <div class="d-flex align-items-center gap-3 margin">
          <img src="https://images.seeklogo.com/logo-png/48/1/vercel-logo-png_seeklogo-480587.png" alt=""
            width="50" height="50" id="postLogo">
          <div class="d-flex flex-column align-items-center">
            <h5>Sufiyan</h5>
            <span>randomm</span>
          </div>
        </div>
    
        <div>
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
    
    
      <!-- post Description -->
      <div class="postDescription text-start  px-4">
        <p class="mb-2 mt-4">${description.value}</p>

      </div>
    
      <!-- postImage -->
      <div class= ${imageUrl ? 'postImage' : "hidden"} >
        <img
          src=${imageUrl}
          alt="">
      </div>
    
    
      <!-- post like area -->
      <div class="postLike d-flex  justify-content-between px-4 mt-3">
        <div>
          <i class="fa-solid fa-thumbs-up text-primary"></i>
          <i class="fa-solid fa-heart text-danger"></i>
          <span>12K</span>
        </div>
        <div>
          <span>2.5K comments</span> · <span>1.2K shares</span>
        </div>
      </div>
    
    
      <hr>
    
      <div class="postBtnLikeShareComment d-flex justify-content-around">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    
    </div>`

    description.value = ""
    image.value = ''
}


function loadApp (){

for (let i = 0 ; i < groupsAndPages.length; i++){
  // console.log(groupsAndPages[i]);
  leftSidebar.innerHTML += `  <div class="d-flex gap-2 align-items-center">
          <img src=${groupsAndPages[i].img} alt="" height="50px" width="50px">
          <p>${groupsAndPages[i].title}</p>
        </div> `
  
}

for (let i = 0; i < friends.length; i++){

  if(friends[i].isOnline){
   onlineIcon.classList.add("hidden")
    console.log(onlineIcon);
    
  }

  friendsChats.innerHTML += `<div class="d-flex gap-2 align-items-center">
          <img src=${friends[i].img} alt="" height="50px" width="50px">
          ${friends[i] && friends[i].isOnline ? `<div id="online" ></div>` : ""}
          <p>${friends[i].name} </p>
        </div>`
}



}


function logoutHandler (){
console.log("mera logout handler chlaa -->");


let isUserValid =  localStorage.setItem("currentUser" , JSON.stringify(null));


console.log("mery dashboard mai current user -->",currentUser);

if(!isUserValid){
  window.location.href = "../Pages/login.html"
}

}





loadApp()

// template literals  == ``

// dynamic strings banana...


 


// post code for html 



// <!-- single post -->
// <div class="post mb-4">

//   <!-- post header -->
//   <div class="postHeader  d-flex justify-content-between align-items-center px-4">
//     <div class="d-flex align-items-center gap-3 margin">
//       <img src="https://images.seeklogo.com/logo-png/48/1/vercel-logo-png_seeklogo-480587.png" alt=""
//         width="50" height="50" id="postLogo">
//       <div class="d-flex flex-column align-items-center">
//         <h5>Sufiyan</h5>
//         <span>randomm</span>
//       </div>
//     </div>

//     <div>
//       <i class="fa-solid fa-x"></i>
//     </div>
//   </div>







//   <!-- post Description -->
//   <div class="postDescription text-start  px-4">
//     <p class="mb-2 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi sit
//       ratione.</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi sit ratione.</p>
//   </div>

//   <!-- postImage -->
//   <div class="postImage bg-warning">
//     <img
//       src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
//       alt="">
//   </div>


//   <!-- post like area -->
//   <div class="postLike d-flex  justify-content-between px-4 mt-3">
//     <div>
//       <i class="fa-solid fa-thumbs-up text-primary"></i>
//       <i class="fa-solid fa-heart text-danger"></i>
//       <span>12K</span>
//     </div>
//     <div>
//       <span>2.5K comments</span> · <span>1.2K shares</span>
//     </div>
//   </div>


//   <hr>

//   <div class="postBtnLikeShareComment d-flex justify-content-around">
//     <button>Like</button>
//     <button>Comment</button>
//     <button>Share</button>
//   </div>

// </div>