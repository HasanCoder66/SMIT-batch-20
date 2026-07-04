// console.log("js is running -->");

let resturantMenu = [
  {
    title: "Biryani",
    category: "lunch",
    price: 250,
    description: "bohat achi biryaani hai....",
    image:
      "https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
  },
  {
    title: "Beef Biryani",
    category: "lunch",
    price: 250,
    description: "bohat achi biryaani hai....",
    image:
      "https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
  },
  {
    title: "Korma",
    category: "lunch",
    price: 300,
    description: "bohat acha kormaaa hai....",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOcMye8Emwkv4aPXIUTMC3GXjJwXAmGi-CDbYta7L4_vuWi-tzoD6A5M9&s=10",
  },
  {
    title: "Halwa Puri",
    category: "breakfast",
    price: 100,
    description: "bohat acha nashtaa hai....",
    image: "https://images.deliveryhero.io/image/fd-pk/LH/jnq8-listing.jpg",
  },
  {
    title: "chaii Parathaa",
    category: "breakfast",
    price: 100,
    description: "bohat acha nashtaa hai....",
    image: "https://images.deliveryhero.io/image/fd-pk/LH/jnq8-listing.jpg",
  },
  {
    title: "pakola",
    category: "beverages",
    price: 100,
    description: "bohat acha pakolaa hai....",
    image: "https://images.deliveryhero.io/image/fd-pk/LH/jnq8-listing.jpg",
  },
  {
    title: "Lassi",
    category: "beverages",
    price: 150,
    description: "bohat achi lassi hai....",
    image: "https://images.deliveryhero.io/image/fd-pk/LH/jnq8-listing.jpg",
  },
];

let input = document.getElementById("input");
let cardParent = document.querySelector(".cardParent");

// btns
let searchBtn = document.getElementById("searchBtn");
let all = document.getElementById("all");
let lunch = document.getElementById("lunch");
let breakfast = document.getElementById("breakfast");
let beverages = document.getElementById("beverages");

// const allHandler = () => {
// loadApp()
// }

// const lunchHandler = (category) => {

// let filteredItems= resturantMenu.filter((item) => {
//         if(item.category.toLowerCase() == category.toLowerCase()){
//             return item
//         }

//     })

//      let cardsHTML =  filteredItems.map((item) => {
//       return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
//                <div class="imageParent  h-[200px] w-full rounded">
//                  <img src=${item.image} alt="" class="h-full  w-full object-contain ">
//                </div>
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <p class="font-semibold text-gray-500">${item.description}</p>
//                 <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${item.price}</button>
//             </div>`

//     })

//     // console.log(cardsHTML);
//     cardParent.innerHTML = cardsHTML.join(" ")

// // console.log("lunchHandler --> chlaa");

// }

// const breakfastHandler = (category) => {
// // console.log("breakfastHandler --> chlaa");

// let filteredItems = resturantMenu.filter((item) => item.category.toLowerCase() == category)

// // console.log(filteredItems);

// let cardsHTML = filteredItems.map((item) => {
//     return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
//                <div class="imageParent  h-[200px] w-full rounded">
//                  <img src=${item.image} alt="" class="h-full  w-full object-contain ">
//                </div>
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <p class="font-semibold text-gray-500">${item.description}</p>
//                 <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${item.price}</button>
//             </div>`
// })

// cardParent.innerHTML = cardsHTML.join(" ")

// }

// const beveragesHandler = (category) => {
// // console.log("beveragesHandler --> chlaa");

// let filteredItemsorCardsHTML = resturantMenu.filter((item) => item.category.toLowerCase() == category.toLowerCase()).map((item) => {

//       return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
//                <div class="imageParent  h-[200px] w-full rounded">
//                  <img src=${item.image} alt="" class="h-full  w-full object-contain ">
//                </div>
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <p class="font-semibold text-gray-500">${item.description}</p>
//                 <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${item.price}</button>
//             </div>`

// })

// cardParent.innerHTML = filteredItemsorCardsHTML.join("")
// console.log(filteredItemsorCardsHTML);

// }

// const loadApp = () => {
//   let cardsHTML =  resturantMenu.map((item) => {
//       return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
//                <div class="imageParent  h-[200px] w-full rounded">
//                  <img src=${item.image} alt="" class="h-full  w-full object-contain ">
//                </div>
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <p class="font-semibold text-gray-500">${item.description}</p>
//                 <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${item.price}</button>
//             </div>`

//     })

//     // console.log(cardsHTML);
//     cardParent.innerHTML = cardsHTML.join(" ")

// }

const cardHTML = (data) => {
    return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
               <div class="imageParent  h-[200px] w-full rounded">
                 <img src=${data.image} alt="" class="h-full  w-full object-contain ">
               </div>
                <h3 class="font-bold text-2xl">${data.title}</h3>
                <p class="font-semibold text-gray-500">${data.description}</p>
                <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${data.price}</button>
            </div>`;
}


const searchHandler = () => {
  if (!input.value.trim()) return alert("please fill the input...");

  let searchValue = input.value;

  let filteredItems = resturantMenu.filter((item) => {
    if (
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.title.toLowerCase() == searchValue.toLowerCase()
    ) {
      return item;
    }
  });

  let cardsHTML = filteredItems.map((item) => {
    return cardHTML(item)
  });

  cardParent.innerHTML = cardsHTML.join("");
};

// loadApp()

// event listeners
searchBtn.addEventListener("click", searchHandler);
// all.addEventListener("click", allHandler)
// lunch.addEventListener("click", () => {lunchHandler("lunch")})
// breakfast.addEventListener("click", () => breakfastHandler("breakfast"))
// beverages.addEventListener("click", () => {
//     beveragesHandler("beverages")
// })





// first time menu function...
// const menu = (category) => {
//   let filteredItems = resturantMenu.filter((item) => {
//     if (category) {
//       return item.category.toLowerCase() == category.toLowerCase();
//     } else {
//       return true;
//     }
//   });

//  let cardsHTML =  filteredItems.map((item) => {
//     return ` <div class="card  w-[300px] shadow rounded p-4 mt-3 mb-3">
//                <div class="imageParent  h-[200px] w-full rounded">
//                  <img src=${item.image} alt="" class="h-full  w-full object-contain ">
//                </div>
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <p class="font-semibold text-gray-500">${item.description}</p>
//                 <button class="py-2 px-6 bg-yellow-400 rounded font-bold cursor-pointer">${item.price}</button>
//             </div>`;
//   })

// //   console.log(filteredItems);

// cardParent.innerHTML = cardsHTML.join("")
// };


const menu = (category) => {
  let filteredItems = resturantMenu.filter((item) => {
    if (category) {
      return item.category.toLowerCase() == category.toLowerCase();
    } else {
      return true;
    }
  });

 let cardsHTML =  filteredItems.map((item) => cardHTML(item))

//   console.log(filteredItems);

cardParent.innerHTML = cardsHTML.join("")
};

all.addEventListener("click", () => menu());
lunch.addEventListener("click", () => {
  menu("lunch");
});
breakfast.addEventListener("click", () => menu("breakfast"));
beverages.addEventListener("click", () => {
  menu("beverages");
});
