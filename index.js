const grid = document.querySelector("#grid");
const button = document.querySelector('#btn');

for (let i = 1; i < 17; i++) {
  let div = document.createElement("div");
  div.textContent = `square ${i}`;
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

button.addEventListener('click', removeDivs);