// console.log("api calling in js -->");

let cardParent = document.querySelector(".cardParent")



// fetch 

startApp()

// index.html ka -->
function startApp (){

    fetch("https://dummyjson.com/products").then((response) => {
    return response.json()  
})
.then((result) => {
    // console.log(result.products);

 let returnHTML =    result.products.map((item) => {
const {brand, category, description, price, title, images} = item

        return `<div id=${item.id}
        class="meraCard card p-4 rounded shadow-md w-[300px] h-[400px] flex flex-col justify-center mb-2"
      >
      <a id="productCard" href="/productDetail.html" target="_blank">
        <div class="w-[260px] h-[150px] flex bg-red-500">
          <img
            src=${images[0]}
            alt=""
            class="w-[260px] h-[150px]"
          />
        </div>
        <h2 class="mt-3 font-bold">${title}</h2>
        <div class="flex justify-between items-center">
          <div>
            <h3 class="font-bold text-2xl">${brand == undefined ? "Anonymous" : brand}</h3>
          </div>
          <div>
            <button class="bg-gray-500 p-2 rounded-full text-white">
            ${category}
            </button>
          </div>
        </div>
        <p class="text-gray-700">
 ${description.slice(0,50)}
        </p>

        <button class="bg-gray-500 p-2 rounded-full text-white mt-2">
          RS: ${price}
        </button>

        </a>
      </div>
      `
    })

    cardParent.innerHTML = returnHTML.join(" ")
    console.log(returnHTML);
    
    
})

}


document.addEventListener("click", (e) => {
    let elem = e.target;
    if(elem.classList.contains("meraCard")){
        localStorage.setItem("id", JSON.stringify(elem.id))
    }
    


    
})









