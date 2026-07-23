// --> product detail html ka 
let id = JSON.parse(localStorage.getItem("id"));
let bannerImage = document.getElementById("mainImage")
let title = document.getElementById("title")

let brand = document.getElementById("brand")
let rating = document.getElementById("rating")
let price = document.getElementById("price")
let beforePrice = document.getElementById("before-price")

console.log(bannerImage);


const loadSingleProductData = async (id) => {
   try {
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let result = await response.json();
  console.log(result);

  bannerImage.src = result.images[0]
  title.innerHTML = result.title
  brand.innerHTML = result.brand
  rating.innerHTML = result.rating
  price.innerHTML = result.price
  beforePrice.innerHTML = result.discountPercentage
  
   } catch (error) {
    console.log(error);
    
   }
    
}



loadSingleProductData(2)