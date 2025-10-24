const clickButton = document.querySelector(".btn");
const inputTask = document.querySelector(".enter__task")
const listOfTasks = document.querySelector(".listoftasks")


clickButton.addEventListener('click', function(){
    addTask()
})

function addTask(){
    if (inputTask.value === ""){
        alert("Введи задачу пжпж")
    } else {
    let newTask = document.createElement('li');
    newTask.innerHTML = inputTask.value;
    listOfTasks.appendChild(newTask);
    let deleteTask = document.createElement('span')
    deleteTask.innerHTML = '\u00d7'
    newTask.appendChild(deleteTask)
    }
    inputTask.value = "";
}

listOfTasks.addEventListener('click', function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})