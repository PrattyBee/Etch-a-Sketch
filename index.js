const grid = document.querySelector("#grid");


for (let i = 1; i < 17; i++) {
  let div = document.createElement("div");
  div.textContent = `square ${i}`;
  div.classList.add('square');
  grid.appendChild(div);
}
