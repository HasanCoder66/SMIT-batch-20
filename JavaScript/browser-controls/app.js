console.log("js is running -->");


// var a = 12;

// let user = true
// if(user){
//     window.location.href = "dashboard.html"
// }

// window.location.assign("dashboard.html")

// setTimeout(() => {
// window.location.reload()
// }, [3000])


// var monkeyWindow = window.open();

// console.log(monkeyWindow);

// var windowContent = `<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
// group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
// robes with large hoods covering their heads.</p>`;


// monkeyWindow.document.writeIn(windowContent);


// window.open(document.writeln(`<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
//  group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
//  robes with large hoods covering their heads.</p>`));


let click   =  document.getElementById("click")
let btnClose = document.getElementById("closeBtn")


if(click){

    click.addEventListener("click", function (){
        window.open("dashboard.html")
    })
}



if(btnClose){
    btnClose.addEventListener("click", function (){
    window.close()
})
}