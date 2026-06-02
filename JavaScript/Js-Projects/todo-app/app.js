// console.log("js is running -->");

// input ==>
let inputTask = document.getElementById("inputTask")

// todo list
let list = document.getElementById("list")
console.log(list.children);

// btns ==>
let addBtn = document.getElementById("addBtn")
let deleteAllBtn = document.getElementById("deleteAllBtn")

// console.log(addBtn);

if(list.children.length <= 0){
 list.innerHTML = `<h3 class="text-center">No Task Added Yet </h3>`
}

function addTodo (){
let h3  = list.children[0]
h3.classList.add("hidden")


    let inputVal = inputTask.value;

    if(!inputVal.trim()){
        return sweety ("error", "Oops", "Please Enter a Task!")
    }


    let createLI = document.createElement("li")
    let parentSpan = document.createElement("span")
    let editSpan = document.createElement("span")
    let deleteSpan = document.createElement("span")
    let pTag = document.createElement("p")
    

    editSpan.innerText = "Edit"
    deleteSpan.innerText = "Delete"
    pTag.innerText = inputVal;

    
    // add classes on span
    parentSpan.classList.add("iconsParent")
    editSpan.classList.add("edit")
    deleteSpan.classList.add("delete")

    // add attribute

    deleteSpan.setAttribute("onclick", "singleElem(this)")
    editSpan.setAttribute("onclick", "editElem(this)")

    // parent godh leraha hai 2 bacchoo ko..
    createLI.appendChild(pTag)
    parentSpan.appendChild(editSpan)
    parentSpan.appendChild(deleteSpan)
    createLI.appendChild(parentSpan)


        // list godh leraha hai..
        list.appendChild(createLI)


        inputTask.value = ""
    return sweety ("success", "Task Added", "Task Added Sucessfully!")

}

function deleteAll (){
    list.innerHTML = ""

    if(list.children.length <= 0){
 list.innerHTML = `<h3 class="text-center">No Task Added Yet </h3>`
}
    return sweety("success", "Todos Delete", "All Todos Deleted")
}


function singleElem (e){
// console.log(e);

let li = e.parentNode.parentNode

list.removeChild(li)


console.log(list.children.length);

if(list.children.length <= 1){
 list.innerHTML = `<h3 class="text-center">No Task Added Yet </h3>`
}

    return sweety("success", "Task Deleted", "Task Delete Sucessfully!")


}


function editElem(e){
    
}

function sweety (icon, title, text){
    return Swal.fire({
  icon:icon,
  title: title,
  text: text,
});
}




// event listeners ==>

    addBtn.addEventListener("click", addTodo)
    deleteAllBtn.addEventListener("click", deleteAll)