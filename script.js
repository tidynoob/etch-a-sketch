

let removePriorGrid = () => {
    let priorGrid = document.querySelectorAll('.grid-row');
    priorGrid.forEach(row => row.remove());
}

let shadeSquare = (e) => {
    // console.log(e);
    e.target.classList.add('hovered')
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

    let gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', shadeSquare));
};

let newGrid = () => {
    let size = parseInt(prompt("Input the length of the side"));
    // console.log(size);
    if (Number.isNaN(size)) return
    while (!Number.isFinite(size)) {
        size = parseInt(prompt("Please enter a valid side length"));
    }
    console.log('test');
    createGrid(size);
    // console.log()
}

createGrid(4);

let button = document.querySelector('button');

button.addEventListener('click', newGrid);
