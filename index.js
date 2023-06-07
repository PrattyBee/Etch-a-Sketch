const grid = document.querySelector("#grid");
const button = document.querySelector('#btn');

for (let i = 1; i < 17; i++) {
  let div = document.createElement("div");
  div.textContent = `square ${i}`;
  div.style.width = '25%';
  div.style.height = '200px';
  div.classList.add('square');
  grid.appendChild(div);
}

function removeDivs() {
    let divs = document.querySelectorAll('.square');
    divs = Array.from(divs);
    divs.forEach((element) => {
        element.remove();
    })
}

function createGrid(width, height) {
    let numOfSquares = width * height;
    let widthSize = 960 / width;
    let heightSize = 960 / height;
    for (let i = 1; i < numOfSquares + 1; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.textContent = `*`;
        div.style.width = `${widthSize}px`;
        div.style.height = `${heightSize}px`;
        grid.appendChild(div);
    }
}

function changeGrid() {
    let width = parseInt(prompt('Enter the width of the grid'));
    let height = parseInt(prompt('Enter the height of the grid'));
    if (width > 100 || height > 100) {
        alert('Please enter a width and height below 100');
        return;
    }
    removeDivs();
    createGrid(width, height);
}

button.addEventListener('click', changeGrid);