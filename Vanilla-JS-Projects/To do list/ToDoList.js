const addBtn = document.getElementById("AddBtn")



addBtn.addEventListener("click", (eo) => {
    eo.preventDefault()
    const AddTask = document.getElementById("AddTask").value
const newTask = `
            <div class="taskContainer">
                <span class="icon-star-full icons"></span>
                <div class="task1">
                    <p>${AddTask}</p>
                </div>
                <div class="icons">
                    <span class="icon-bin"></span>
                     <span class="icon-angry2"></span>
                </div>
            </div>
`

 ToDoTasks.innerHTML += newTask
 AddTask = ""
})



/*=====removing a task======*/
const ToDoTasks = document.querySelector(".ToDoTasks")

ToDoTasks.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-bin") {
     eo.target.parentElement.parentElement.remove()  
    } else {}   
})
    

 /*=======put a line through a completed task=======*/
 ToDoTasks.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-angry2") {
        eo.target.classList.add("icnAngryActive")
        eo.target.parentElement.parentElement.getElementsByClassName("task1")[0].classList.add("task1Active")
        ToDoTasks.append( eo.target.parentElement.parentElement)
        const iconHeart = `<span class="icon-heart"></span>`
        eo.target.parentElement.innerHTML += iconHeart
    } else if (eo.target.className == "icon-heart") {
        eo.target.classList.add("iconHeart")
        eo.target.parentElement.getElementsByClassName("icon-angry2")[0].classList.remove("icnAngryActive")
        eo.target.parentElement.parentElement.getElementsByClassName("task1")[0].classList.remove("task1Active")
    }   
})


/*======preoritized/starrred task =======*/
ToDoTasks.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-star-full icons") {
        eo.target.style.color = "orange"
        eo.target.style.opacity = "1"
        ToDoTasks.prepend(eo.target.parentElement)
    } else {}   
})

