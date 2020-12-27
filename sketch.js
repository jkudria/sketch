// TODO: input from user
const gridDim = 16;

const bgColor = '#FFFFFF';

let container = document.querySelector("#container");
let style = window.getComputedStyle(container, null);

// Gives us the dimensions of just the content, not including padding/border/margin
let containerWidth = style.getPropertyValue('width');
let containerHeight = style.getPropertyValue('height');

const cells = createCells();
console.log(cells);

function createCells() {
	for (let i = 0; i < gridDim**2; i++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		container.appendChild(cell);
	}

	return document.querySelectorAll('div.cell');
}

function clearCells() {
	cells.forEach(cell => {

		// TODO: can I put this if statement into one line
		if (cell.classList.contains('black')) {
			cell.classList.remove('black');
		}
	});
}

cells.forEach(cell => {
	cell.addEventListener('mouseover', () => {
		cell.classList.add('black');
	});
});

let clearButton = document.querySelector('button#clear');
clearButton.addEventListener('click', clearCells);