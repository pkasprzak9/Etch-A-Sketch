const rows = 16;
const columns = 16;

const grid = document.createElement('div');
grid.className = 'grid';
const container = document.getElementById('container');

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


function fillBox(){
    this.style.background = 'blue';
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