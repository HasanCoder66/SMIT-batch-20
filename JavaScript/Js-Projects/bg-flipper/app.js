let colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "skyblue",
  "lightblue",
  "gray",
  "purple",
  "pink",
  "black",
  "orange",
  "white",
  "brown",
  "lightbrown",
  "margenda",
  "teal",
  "cyan",
];

function changeColor() {
    
    let randomNum  = Math.floor(Math.random() * colors.length)
    let text = document.getElementById("colorName")


    


  let bodyTag = document.getElementsByTagName("body")[0];

  if(bodyTag.style.backgroundColor == "black"){
    text.style.color = "white"
  }

  console.log(bodyTag.style.backgroundColor)
  console.log(bodyTag.style.backgroundColor == "black")
  bodyTag.style.backgroundColor = colors[randomNum];
  text.innerText = colors[randomNum]
  text.style.textTransform = "uppercase" 
}
