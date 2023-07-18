const dragZoneToDo = document.querySelectorAll('.container-tasks')[0]
const dragZoneInProgress = document.querySelectorAll('.container-tasks')[1]
const dragZoneDone = document.querySelectorAll('.container-tasks')[2]
const dragElement = document.querySelector('.task-todo')

dragZoneInProgress.ondragover = allowDrop;

function allowDrop (event) {
    event.preventDefault();
}

dragElement.ondragstart = drag;

function drag (event) {
    event.dataTransfer.setData('id', event.target.id);
}

dragZoneInProgress.ondrop = drop;

function drop (event) {
    let itemId = event.dataTransfer.getData('id');
    // itemId.setAttribute('id','idName')
    console.log(itemId);
    event.target.append(document.querySelector('#itemId'));
}
