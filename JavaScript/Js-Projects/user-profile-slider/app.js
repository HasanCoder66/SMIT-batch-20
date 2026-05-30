let usersArr = [
    {
        name: "Hasan",
        city: "Karachi",
        country: "Pakistan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis harum deleniti saepe quae ea perferendis aspernatur voluptas optio, commodi molestias.",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
    {
        name: "Sufiyan",
        city: "Karachi",
        country: "Pakistan",
        description: "My name is sufiyan. i' studying web development course from saylani mass it training",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
    {
        name: "Hammad",
        city: "Karachi",
        country: "Pakistan",
        description: "My name is hammad janiiii..",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
]

let container = document.getElementById("container")



let count = 0;

function nextHandler() {
    count++

    let currentUser = usersArr[count]

    if (usersArr.length == count + 1) {
        count = -1
    }

    container.innerHTML = ` <div class="card">
       
       <div id="box-2">
         <div class="imageArea">
            <img src=${currentUser.profileImg} alt="">
        </div>

        <div class="info">
            <h2>${currentUser.name}</h2>
            <h4>${currentUser.city}, ${currentUser.country}</h4>
            <p>${currentUser.description} </p>
        </div>
       </div>

    </div>`
}


function prevHandler() {

    

    console.log("handler chly howy count", count);

    count--

    console.log("after decrement", count);


    if (count == -1) {
        count = usersArr.length - 1

        console.log(count, "count ==>");
        // console.log("current user ==>",currentUser);



    }
    let currentUser = usersArr[count]


    container.innerHTML = ` <div class="card">
       
       <div id="box-2">
         <div class="imageArea">
            <img src=${currentUser.profileImg} alt="">
        </div>

        <div class="info">
            <h2>${currentUser.name}</h2>
            <h4>${currentUser.city}, ${currentUser.country}</h4>
            <p>${currentUser.description} </p>
        </div>
       </div>

       



    </div>`
}


function loadApp() {
    container.innerHTML = ` <div class="card">
       
       <div id="box-2">
         <div class="imageArea">
            <img src=${usersArr[0].profileImg} alt="">
        </div>

        <div class="info">
            <h2>${usersArr[0].name}</h2>
            <h4>${usersArr[0].city}, ${usersArr[0].country}</h4>
            <p>${usersArr[0].description} </p>
        </div>
       </div>

    </div>`
}

loadApp()