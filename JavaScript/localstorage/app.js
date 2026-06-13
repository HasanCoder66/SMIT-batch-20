console.log("js is running -->");
 let theme = localStorage.getItem("theme")
let myBodyElem = document.getElementsByTagName("body")[0]

console.log(myBodyElem);

// let maniMila =localStorage.getItem("jani");

let darkThemeBtn  = document.getElementById("darkThemeBtn");
let lightThemeBtn  = document.getElementById("lightThemeBtn");

const darkThemeHandler = () => {
    console.log("theme update kerny wala honn...");

   

    localStorage.setItem("theme", "dark")
 window.location.reload()
    
}
const lightThemeHandler = () => {
    console.log("theme update kerny wala honn...");

   

    localStorage.setItem("theme", "light")

    window.location.reload()

    
}


const loadApp = () => {
    
if(theme == "dark"){
 myBodyElem.style.backgroundColor = "black"
 myBodyElem.style.color = "white"
}

if(theme == "light"){
    myBodyElem.style.backgroundColor = "white"
   myBodyElem.style.color = "black"

}
}

loadApp()

// console.log(theme == "dark");


darkThemeBtn.addEventListener("click", darkThemeHandler)
lightThemeBtn.addEventListener("click", lightThemeHandler)