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
            row.appendChild(gridDiv.cloneNode(true));
            console.log(i);
        }
    })
    let gridDivCollection = document.querySelectorAll('.grid');
    gridDivCollection.forEach((grid) => {
        grid.addEventListener('mouseover', (e) => {
            if(e.target.style.backgroundColor !== '') {
                numArray = e.target.style.backgroundColor.split(",");
                finalArray = [];
                numArray.forEach((num) => {
                    finalArray.push(stringToNum(num));
                });
                e.target.style.backgroundColor = `rgb(${rgbMaxCheck(finalArray[0])},${rgbMaxCheck(finalArray[1])},${rgbMaxCheck(finalArray[2])})`;
            }
            else {e.target.style.backgroundColor = randomRGB()}
        })
    });
};

function rgbMaxCheck(num) {
    numDarker = num-25.5;
    if((numDarker) < 0) {return 0};
    return parseInt(numDarker)
};

function stringToNum(string) {
    return string.replace(/[^0-9]/g, '')
};

function randomRGB(elm) {
    ranNum1 = Math.floor(Math.random()*256);
    ranNum2 = Math.floor(Math.random()*256);
    ranNum3 = Math.floor(Math.random()*256);
    let ranColorNum = `rgb(${ranNum1},${ranNum2},${ranNum3})`;
    return ranColorNum
};

function createRowContainers(gridNum) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for(let i = 0; i < gridNum; i++) {
        mainContainer.appendChild(rowDiv.cloneNode(true))
    }
}

createGrids(45)