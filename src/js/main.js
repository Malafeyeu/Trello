import { addButton, cancelButton, 
    addButtonEdit, cancelButtonEdit,
    inputTitle, inputDescription, 
    inputEditTitle, inputEditDescription,
    delAll, timeForTodos,
    counterOne, counterTwo, counterThree} from "./variables.js";

import { createTodo, createInprogress, createDone,
    parentOfAllTodos, parentOfAllInprogress, parentOfAllDone,
    addToLocalStorage} from "./functions.js";

let todo = [];
let inprogress = [];
let done = [];

//получаем массивы из local storage
getTodoFromLocalStorage();
console.log(todo);
getInprogressFromLocalStorage();
console.log(inprogress);
getDoneFromLocalStorage();
console.log(done);

//генерируем задачи, исходя из полученных массивов
if(todo.length !== 0) {
  for (let i = 0; i < todo.length; i++){
      createTodo(todo[i]);
      counterOne.innerText = todo.length;
  }
}
if(inprogress.length !== 0) {
  for (let i = 0; i < inprogress.length; i++){
      createInprogress(inprogress[i]);
      counterTwo.innerText = inprogress.length;
  }
}
if(done.length !== 0) {
  for (let i = 0; i < done.length; i++){
      createDone(done[i]);
      counterThree.innerText = done.length;
  }
}

//добавление задачи
addButton.addEventListener("click", function(){
    let newTask = {
        id: Date.now(),
        title: inputTitle.value,
        description: inputDescription.value,
        user: "xxx", //добавить сюдаааааааа пользователяяяяяяяяяяяяяяяяяяяяя
        time: timeForTodos,
    }
    //залить обьект в массив, сгенерировать задачу
    todo.push(newTask);
    createTodo(newTask);
    //очистка инпутов
    inputTitle.value = "";
    inputDescription.value = "";
    //считаем количество задач и выводим в хедер
    let howManyTasks = todo.length;
    counterOne.innerText = howManyTasks;
    addToLocalStorage("todo", todo);
})

//очистка инпутов при отмене ввода задачи
cancelButton.addEventListener("click", function(){
    inputTitle.value = "";
    inputDescription.value = "";
})

//сломалось
//кнопка редактирования задачи
parentOfAllTodos.addEventListener("click", function(event){
  if (event.target.dataset.action === "edit"){
    const taskToEdit = event.target.closest(".task-todo");
    const idEdit = taskToEdit.getAttribute("id");
    todo.forEach (function(element, index) {
      if(element.id == idEdit){
        let newTask = todo.splice(index, 1)[0];
        console.log(newTask);   
        inputEditTitle.value = `${newTask.title}`;
        inputEditDescription.value = `${newTask.description}`;
        console.log(addButtonEdit)
        addButtonEdit.addEventListener("click", function(){
          console.log(todo)
          for (let item in newTask) {
            if (newTask[item] == idEdit) {
              newTask.title = inputEditTitle.value
              newTask.description = inputEditDescription.value
              document.getElementsByClassName("task-todo-title__title")[0]
              .textContent = newTask.title
              document.getElementsByClassName("task-todo-description__info")[0]
              .textContent = inputEditDescription.value
              if (todo[0]){
                todo.pop()
                todo.push(newTask)
              } else {
                todo.push(newTask)
              }
            }
          }
        })
      }
    })
  }
})


//удаление задачи из списка и из массива в туду
parentOfAllTodos.addEventListener("click", function(event){
    if (event.target.dataset.action === "delete"){
        const taskToRemove = event.target.closest(".task-todo");
        taskToRemove.remove();
        const idRemoved = taskToRemove.getAttribute("id");
        todo.forEach (function(element, index) {
            if(element.id == idRemoved){
                todo.splice(index, 1);
                let howManyTasks = todo.length;
                counterOne.innerText = howManyTasks;
                addToLocalStorage("todo", todo);
            }
    })
}})

//переместить в инпрогресс
parentOfAllTodos.addEventListener("click", function(event){
    if (event.target.dataset.action === "check"){
        const taskToRelocate = event.target.closest(".task-todo");
        const idRemoved = taskToRelocate.getAttribute("id");
        todo.forEach (function(element, index) {
            if(element.id == idRemoved){
                if (inprogress.length < 6){
                    taskToRelocate.remove();
                    const newData = todo.splice(index, 1)[0];
                    createInprogress(newData);
                    inprogress.push(newData);
                    let howManyTasks = todo.length;
                    counterOne.innerText = howManyTasks;
                    let howManyTasksInp = inprogress.length;
                    counterTwo.innerText = howManyTasksInp;
                    addToLocalStorage("todo", todo);
                    addToLocalStorage("inprogress", inprogress);
                } else {
                    alert("Oops! Unfortunately, you can't add more than 6 tasks here.")
                }
            }
        })
    }
})

//переместить в todo
parentOfAllInprogress.addEventListener("click", function(event){
    if (event.target.dataset.action === "back"){
        const taskToTodo = event.target.closest(".task-inprogress");
        const idRemoved = taskToTodo.getAttribute("id");
        inprogress.forEach (function(element, index) {
            if(element.id == idRemoved){
                taskToTodo.remove();
                const newTask = inprogress.splice(index, 1)[0];
                createTodo(newTask);
                todo.push(newTask);
                let howManyTasks = todo.length;
                counterOne.innerText = howManyTasks;
                let howManyTasksInp = inprogress.length;
                counterTwo.innerText = howManyTasksInp;
                addToLocalStorage("todo", todo);
                addToLocalStorage("inprogress", inprogress);
            }
        })
    }
})

//переместить в доне
parentOfAllInprogress.addEventListener("click", function(event){
    if (event.target.dataset.action === "complete"){
        const taskToTodo = event.target.closest(".task-inprogress");
        const idRemoved = taskToTodo.getAttribute("id");
        inprogress.forEach (function(element, index) {
            if(element.id == idRemoved){
                taskToTodo.remove();
                const taskDone = inprogress.splice(index, 1)[0];
                createDone(taskDone);
                done.push(taskDone);
                let howManyTasksInp = inprogress.length;
                counterTwo.innerText = howManyTasksInp;
                let howManyTasksDone = done.length;
                counterThree.innerText = howManyTasksDone;
                addToLocalStorage("inprogress", inprogress);
                addToLocalStorage("done", done);
            }
        })
    }
})

//удаление задачи из списка и из массива в доне
parentOfAllDone.addEventListener("click", function(event){
    if (event.target.dataset.action === "delete"){
        const doneRemove = event.target.closest(".task-done");
        doneRemove.remove();
        const idRemoved = doneRemove.getAttribute("id");
        done.forEach (function(element, index) {
            if(element.id == idRemoved){
                done.splice(index, 1);
                let howManyTasksDone = done.length;
                counterThree.innerText = howManyTasksDone;
                addToLocalStorage("done", done);
            }
        })
    }
})

//удаление всех задач в доне
delAll.addEventListener("click", function () {
    const deleteAll = document.querySelectorAll('.task-done');
    let delTask = confirm("Are you sure? You will not be able to cancel this action");
    if (delTask === true) {
    for (let i = 0; i < deleteAll.length; i++) {
        deleteAll[i].remove();
    }
    done.splice(0, done.length);
    let howManyTasksDone = done.length;
    counterThree.innerText = howManyTasksDone;
    addToLocalStorage("done", done);
    }
})

function getTodoFromLocalStorage(){
  if(localStorage.getItem("todo") !== null){
    todo = JSON.parse(localStorage.getItem("todo"))
  }
}
function getInprogressFromLocalStorage(){
  if(localStorage.getItem("inprogress") !== null){
    inprogress = JSON.parse(localStorage.getItem("inprogress"))
  }
}
function getDoneFromLocalStorage(){
  if(localStorage.getItem("done") !== null){
    done = JSON.parse(localStorage.getItem("done"))
  }
}