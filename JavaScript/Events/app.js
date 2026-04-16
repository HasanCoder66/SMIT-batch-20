// console.log("javascript is running ==>")



function myFn (a) {
    console.log("kuch bi...",a)
}


function myClick (){
    let inputEmail = "codermhasan@gmail.com"
    console.log("click howa", inputEmail)
}

function imgClick() {
    console.log("image click ki gayee")
    window.location.href = "https://www.google.com/search?q=images&rlz=1C1CHBF_enPK1156PK1156&oq=images&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRhBMgYIBhBFGEEyBggHEEUYQdIBCDEwMzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#sv=CAMSVhozKhFpYy0xMl9Md0U5Yzl6U2x4TTIOMTJfTHdFOWM5elNseE06DnlkNW81SFlOSTk3MTZNIAQqGwoEc3ZpbRIRaWMtMTJfTHdFOWM5elNseE0YATABGAcg2PvNqAY"
}


let text  = "my name is hasan ashraf or ye or woh."

let expandElem = document.getElementById("expand")
let para = document.getElementById("para")

function expand(){
console.log(expandElem.innerText)

    if(expandElem.innerText == "see more"){
        para.innerHTML = text
        expandElem.innerText = "see less"
        
    }else{
        para.innerText = text.slice(0,16)
        expandElem.innerText = "see more"
    }
    
}