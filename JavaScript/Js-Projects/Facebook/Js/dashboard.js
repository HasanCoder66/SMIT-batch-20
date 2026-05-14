let postContainer = document.querySelector(".postContainer");

let description = document.getElementById("description")
let image = document.getElementById("file")




function postHandler () {

    const file = image.files[0] 
    const imageUrl = URL.createObjectURL(file)

    console.log(imageUrl);
    

    postContainer.innerHTML = `<!-- single post -->
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
      <div class="postImage bg-warning">
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
}







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