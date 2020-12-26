const gridDim = 16;

let container = document.querySelector("#container");
let style = window.getComputedStyle(container, null);

// Gives us the dimensions of just the content, not including padding/border/margin
let containerWidth = style.getPropertyValue('width');
let containerHeight = style.getPropertyValue('height');

for (let i = 0; i < gridDim**2; i++) {
	let cell = document.createElement('div');
	cell.classList.add('cell');
	container.appendChild(cell);
}

let cells = document.querySelectorAll('div.cell');

cells.forEach((cell) => {
	cell.addEventListener('mouseover', () => {
		cell.classList.add('black');
	});
});