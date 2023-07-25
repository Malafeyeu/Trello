const dragAndDrop = () => {
    const dragItem = document.querySelectorAll('#dragItem')[0]
    const dropZone = document.querySelectorAll('#dropZone')

    const dragStart = function () {
        setTimeout(() =>{
            this.classList.add('hide')
        }, 0)
    }

    const dragEnd = function () {
        setTimeout(() =>{
            this.classList.remove('hide')
        }, 0)
    };

    const dragOver = function (event) {
        event.preventDefault();
    }

    const dragEnter = function (event) {
        event.preventDefault();
        this.classList.add('hovered');
    }

    const dragLeave = function () {
        this.classList.remove('hovered');
    }

    const dragDrop = function () {
        this.append(dragItem);
        this.classList.remove('hovered');
    }

    dropZone.forEach((zone) => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('dragenter', dragEnter);
    })

    dragItem.addEventListener('dragstart', dragStart)
    dragItem.addEventListener('dragend', dragEnd)
    dragItem.addEventListener('dragleave', dragLeave)
    dragItem.addEventListener('drop', dragDrop)
}
dragAndDrop()






// const dragZoneToDo = document.querySelectorAll('.container-tasks')[0]
// const dragZoneInProgress = document.querySelectorAll('.container-tasks')[1]
// const dragZoneDone = document.querySelectorAll('.container-tasks')[2]
// const dragElement = document.querySelector('.task-todo')

// dragZoneInProgress.ondragover = allowDrop;

// function allowDrop (event) {
//     event.preventDefault();
// }

// dragElement.ondragstart = drag;

// function drag (event) {
//     event.dataTransfer.setData('id', event.target.id);
// }

// dragZoneInProgress.ondrop = drop;

// function drop (event) {
//     let itemId = event.dataTransfer.getData('id');
//     // itemId.setAttribute('id','idName')
//     console.log(itemId);
//     event.target.append(document.querySelector('#itemId'));
// }






// const dragItems = document.querySelectorAll('#dragItem')
// const dropZones = document.querySelectorAll('#dropZone')

// dragItems.forEach(dragItem, {
//     dragItem.addEventListener('dragstart', handlerDragstart)
//     dragItem.addEventListener('dragend', handlerDragend)
// })

// function handlerDragstart (event) {
//     console.log('dragstart', this);
// }
// function handlerDragend (event) {
//     console.log('dragend', this);
// }