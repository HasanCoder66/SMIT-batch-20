// synchronus code
fetch(`https://dummyjson.com/products`)
.then((response) => {
    // console.log(response);  
 return response.json()  
})
.then((result) => {
    // console.log(result.products);

    result.products.map((item, idx) => {
        console.log(item);
        
    })
    
})


// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");



// asynchronus code



