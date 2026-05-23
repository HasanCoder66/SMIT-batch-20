let usersArr = [
    {
        name : "Hasan",
        city : "Karachi",
        country : "Pakistan",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis harum deleniti saepe quae ea perferendis aspernatur voluptas optio, commodi molestias.",
        profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
    {
        name : "Sufiyan",
        city : "Karachi",
        country : "Pakistan",
        description : "My name is sufiyan. i' studying web development course from saylani mass it training",
        profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
    {
        name : "Hammad",
        city : "Karachi",
        country : "Pakistan",
        description : "My name is hammad janiiii..",
        profileImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
    },
]

let container = document.getElementById("container")



let count = 0;
let arrLength = usersArr.length;


function nextHandler (){
    count++

    let currentUser = usersArr[count]

    if(count == usersArr.length ){
        count = 0
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


function prevHandler (){

    let currentUser = usersArr[count]

    count--

    console.log("array length ==>",arrLength);

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