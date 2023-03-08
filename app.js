const rows = 24;
const columns = 24;

const grid = document.createElement('div');
grid.className = 'grid';
const container = document.getElementById('content');

for (let i = 0; i < columns; i++){
    const column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; j++){
        const row = document.createElement('div');
        row.className = 'row';
        row.textContent = ' ';
        column.appendChild(row) 
    }
    grid.appendChild(column);
}
container.appendChild(grid);

let color = '#000000';
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
    boxes.forEach(box => box.style.background = 'white');
}
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearGrid);

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
})