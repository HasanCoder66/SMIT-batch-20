let emailElem = document.getElementById("email")
let myForm = document.getElementById("form")
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


function submitHandler (e){

    // "dollor hi dollor".replace(/dollor/g, "$")
try{
    e.preventDefault()

let user = true;

// if(user) {
//     throw new Error("user not defined")
// }

let email = emailElem.value;

if (!emailElem.value.trim()) {
    console.log("please enter email address");
    return 
}

if(!emailRegex.test(email)){
   throw new Error("invalid email address");
    
}


if(emailRegex.test(email)){
    console.log("form submitted");
    
}
}catch(err){
    console.log("error -->",err);
    
}

}


// myForm.addEventListener("submit", submitHandler)





let tryCatchBtn = document.getElementById("tryCatchBtn")

function handler (){
console.log("mai chalaa -->");


    try {
        a
    console.log(a);
    
} catch (error) {
    console.log("error aya:",error);
    
}finally{
    console.log("mai chl giya...");
    
}
}

tryCatchBtn.onclick = handler

// tryCatchBtn.addEventListener("click", handler)





// function handler (){
//     try {
       
//     } catch (error) {
        
//     }
// }






function foo (){
    console.log("janiiii");
    
}



// tryCatchBtn.onclick = foo


tryCatchBtn.addEventListener("click", handler)
tryCatchBtn.addEventListener("click", foo)