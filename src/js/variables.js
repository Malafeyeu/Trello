export {todo, inprogress, done, 
    addButton, cancelButton, 
    addButtonEdit, cancelButtonEdit,
    inputTitle, inputDescription, 
    inputEditTitle, inputEditDescription,
    delAll, timeForTodos,
    counterOne, counterTwo, counterThree}

let todo = [];
let inprogress = [];
let done = [];

//кнопки добавления задачи и отмены добавления (из модального окна)
const addButton = document.getElementsByClassName("addTodo-button")[0];
const cancelButton = document.getElementsByClassName("cancel-button")[0];
//те же кнопки, но для окна редактирования, которое не работает:)
const addButtonEdit = document.getElementsByClassName("addTodo-button")[1];
const cancelButtonEdit = document.getElementsByClassName("cancel-button")[1];


//инпут заголовка и задачи
const inputTitle = document.getElementsByClassName("modal-inputTitle")[0];
const inputDescription = document.getElementsByClassName("modal-inputDescription")[0];
//инпут в окне редактиррования
const inputEditTitle = document.getElementsByClassName("modal-inputEditTitle")[0];
const inputEditDescription = document.getElementsByClassName("modal-inputEditDescription")[0];

//кнопка "удалить все"
const delAll = document.getElementsByClassName("container-done__footer")[0];

//дата для поля с задачей и объекта
let timeForTodos = `${(new Date())}`.substring(16,21);


//счетчик задач
const counterOne = document.getElementsByClassName("todo-header__counter")[0];
const counterTwo = document.getElementsByClassName("inprogress-header__counter")[0];
const counterThree = document.getElementsByClassName("done-header__counter")[0];