// 07-05-2026 Start ==>
console.log("js is running -->");

let divTag = document.getElementById("parent1");
// let length = divTag.childNodes.length - 2

// console.log(divTag.childNodes[length])

// line 1   -  > 2   - > 3

// - 1




// line 10




// let childrensOfHTML = document.getElementsByTagName("html")[0].children
// let childrensOfHTML = document.getElementsByTagName("html")[0].childNodes[0]
// let childrensOfHTML = document.getElementsByTagName("html")[0].childNodes[2].children[0]
// console.log("We have two children of our html",childrensOfHTML.nodeValue)


// let firstH1 = document.getElementsByTagName("h1")[0]
// let div = document.getElementsByTagName("div")[0]

// let para1 = div.firstChild.nextSibling.previousSibling.parentNode

// console.log(para1)

// {}
// []  

// .prop name 
// []



let mainDiv = document.getElementById("div")

// console.log(mainDiv.hasAttribute("id"))

// console.log(mainDiv.attributes)

// console.log(mainDiv.getAttribute("class"))


// let boolenVal = false
// if(!boolenVal){
//     mainDiv.setAttribute("class", "box")
// }


// for(let i = 0 ; i < mainDiv.length; i++){
//     // console.log(i)

//     if(mainDiv[i].innerText == ""){
        
//         mainDiv[i].innerHTML = "coming soon"
//     }else {
//         console.log("janiii")
//     }
// }


let main = document.getElementById("main")
let h1kaKaam ;
let two = document.getElementById("two")
let createElemPara = document.createElement("p")
let createTextNode = document.createTextNode("document object model.")



createElemPara.appendChild(createTextNode)
h1kaKaam = main.firstChild
// console.log(createElemDiv)



// main.insertBefore(createElemPara, two)
// remove kerna hai mujhy object 2

// main.removeChild(two)  // child ko remove kery ga jo apny arguement mai diyaa hai..
// main.remove() // jis pr remove lagaou gy remove kerdega...


// document.body.appendChild(createElemDiv)


// 07-05-2026 End ==>





// 05-05-2026 Start ==>

// Chapter 56 onwards
// Dcument Object Model (DOM) ==>

// let allH1Tags = document.getElementsByTagName("h1")
// console.log(allH1Tags)

// let documentKaPehlaH1 = document.getElementsByTagName("h1")[1]
// console.log(documentKaPehlaH1)

//     setTimeout(() => {
//         documentKaPehlaH1.innerText = "bohat garmi hai aaj..."
//         documentKaPehlaH1.style.backgroundColor = "red"
// }, 2000)

// let allPTags = document.getElementsByTagName("p")
// console.log(allPTags)

// technique 1
// allPTags[0].style.color = "red"
// allPTags[1].style.color = "red"
// allPTags[2].style.color = "red"
// allPTags[3].style.color = "red"
// allPTags[4].style.color = "red"

// technique 2

// loop ke through

// for (let i = 0; i < allPTags.length; i++){
//     allPTags[i].style.color = "yellow"

//     if(allPTags[i].id == "three"){
//         allPTags[i].style.color = "pink"
//     }
// }

// let thirdElem = document.getElementById("three")
// // console.log(thirdElem)

// thirdElem.style.fontSize = "20px"

// parent Element ===========>

let parentElem = document.getElementById("parent");

// console.log(parentElem.parentNode.previousSibling.previousSibling.lastChild.previousSibling)
// console.log(parentElem.firstChild.nodeType)

// console.log(parentElem.children[0].innerText)
// console.log(parentElem.children[0].firstChild)

// let text = document.createTextNode("han jani kia haal")
// console.log(parentElem.children[1].nodeValue)

// Reuseable component
//     function h1Return (text ){
//         return `<h1>${text}</h1>`
//     }

//    console.log( h1Return("han janiii.."))
//    console.log( h1Return("kuch biiiii"))

// Chapter 56 onwards
// 05-05-2026 End ==>

// // 02-05-2026 Start ===>

//     // Dcument Object Model (DOM) ==>

//     // DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//     let doc = document

//     console.log(doc.childNodes[1].childNodes)

//     // let arr = [12, 34]

//     // console.log(arr[0])

// 02-05-2026 End ===>
