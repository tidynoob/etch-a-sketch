

let removePriorGrid = () => {
    let priorGrid = document.querySelectorAll('.grid-row');
    priorGrid.forEach(row => row.remove());
}

let createGrid = (v) => {

    removePriorGrid();

    let container = document.querySelector('#grid');

    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.className = "grid-row";
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.className = "grid-square";
            // cell.innerText = (i * v) + x;
            // cell.innerText = ' ';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
};

let newGrid = () => {
    let size = prompt("Input the length of the side");
    createGrid(size);
}

createGrid(4);

let button = document.querySelector('button');

button.addEventListener('click', newGrid);