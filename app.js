let size = 24;

const grid = document.createElement('div');
grid.className = 'grid';
const container = document.getElementById('content');


function createGrid(){
    grid.innerHTML = '';
    for (let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < size; j++){
            const row = document.createElement('div');
            row.className = 'row';
            row.textContent = ' ';
            column.appendChild(row) 
        }
        grid.appendChild(column);
    }
    container.appendChild(grid);
    const sizeDisplay = document.getElementById('grid-size-display');
    sizeDisplay.innerHTML = "SIZE: " + size + " x " + size; 
}
createGrid();


let color = 'greenyellow';
function fillBox(){
    this.style.background = color;
}
function startDrawing(){
    const boxes = document.querySelectorAll('.row')
    boxes.forEach(box => box.addEventListener('mouseover', fillBox))
}
function stopDrawing(){
    const boxes = document.querySelectorAll('.row')
    boxes.forEach(box => box.removeEventListener('mouseover', fillBox))
}
grid.addEventListener('mousedown', startDrawing);
grid.addEventListener('mouseup', stopDrawing);


function clearGrid(){
    const boxes = document.querySelectorAll('.row')
    boxes.forEach(box => box.style.background = 'black');
}
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearGrid);

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
})

const slider = document.getElementById('grid-size');
slider.addEventListener('change', () => {
    size = slider.value;
    createGrid();
})

