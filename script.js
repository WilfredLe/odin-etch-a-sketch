let widthTotal = window.innerWidth*.45;
let heightTotal = widthTotal;
let mainContainer = document.querySelector('.main-container');


function createGrids(gridNum) {
    createRowContainers(gridNum);
    let rowsContainers = document.querySelectorAll('.row');
    let widthPerGrid = widthTotal/gridNum; 
    let heightPerGrid = widthPerGrid;
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    gridDiv.style.cssText = `
        width: ${widthPerGrid-1}px; 
        height:${heightPerGrid-1}px;
        border: solid black 1px;
            `;
    rowsContainers.forEach((row) => {
        for(let i = 0; i < gridNum; i++) {
            row.appendChild(gridDiv.cloneNode(true))
            console.log(i);
        }
    })
};

function divColorChange() {
    gridDivCollection.forEach((grid) => {
        grid.addEventListener('hover', (e) => {
            console.log(e)
        })
    })
}

function createRowContainers(gridNum) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for(let i = 0; i < gridNum; i++) {
        mainContainer.appendChild(rowDiv.cloneNode(true))
    }
}

createGrids(16)