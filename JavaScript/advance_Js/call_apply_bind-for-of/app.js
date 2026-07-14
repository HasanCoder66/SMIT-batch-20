// console.log("js is running -->");

// Call | Apply | Bind


// let product = {
//     name :"pakola",
//     quantity : "500ml",
//     price: 100,
// }

//      function showPrice (...kucbi){
//      console.log(kucbi);
//     //    console.log('====================================');
//     //    console.log(this.name);
//     //    console.log('====================================');
//          console.log(this[kucbi]);
            
        
        
        
//     }




// let product2 = {
//     name :"pakola 2",
//     quantity : "500ml",
//     price: 150,
// }


// // showPrice.call(product, "name")
// // showPrice.apply(product, ["name" , "price"])

// let bindNaiReturnKiya = showPrice.bind(product2, "name")
// console.log(bindNaiReturnKiya());


let obj = {
    name : "hasan",
    age : 23
}


let obj2 = {
    name : "ali",
    age : 18
}


function showName (arg){
// console.log(arg[0]);



    // console.log(age);
    // console.log(city);
    
    console.log(this.name);
    
}



// showName.call(obj, "age", "city")XX
// showName.apply(obj, ["age", "city"])
// showName.bind(obj, "age", "city")()





// let arr = [1,2,3,4]

// const characters = "kuchbiiiii";

// const obj = {
//     name:"ali",
//     age: 13
// }

// const entries = Object.entries(obj);

// // console.log(entries);
// const keys = Object.keys(obj)

// // console.log("keys -->",keys);
// const values = Object.values(obj);


// for(const [key , val] of entries){
//     console.log("item value--> ",val);
    
// }



// const obj = {
//     age : 12,
//     isStudent : true,
// }


// for(const [key, value] of Object.entries(obj)){
//     console.log(key)
//     console.log(value);
// }




// const values = Object.values(obj)
// console.log(values);

// for (const val of keys){
    
    
// }


// let name = "name"

// console.log(obj[name]);


// for(const str of characters){
//     console.log(str);
    
// }

// const arrOfObj = [
//     {name:"arham"},
//     {name:"ali"},
// ]

// for(const num of arrOfObj){
//     console.log(num);


//     if(num.name == "ali"){
//         num.name = "abdullah"
//     }
//     console.log(num.name);
    
// }


