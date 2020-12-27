// TODO: input from user
const defaultGridDim = 16;

const bgColor = '#FFFFFF';

let container = document.querySelector("#grid-container");
let containerStyle = window.getComputedStyle(container, null);

// Gives us the dimensions of just the content, not including padding/border/margin
let containerWidth = parseInt(containerStyle.getPropertyValue('width').substring(0, 3));
let containerHeight = parseInt(containerStyle.getPropertyValue('height').substring(0, 3));

let cells;
createCells(defaultGridDim);

function createCells(gridDim) {

	// let cellDim = Math.floor(containerHeight/gridDim);
	let cellDim = containerHeight/gridDim;
	console.log(cellDim);

	for (let i = 0; i < gridDim**2; i++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		cell.style.height = `${cellDim}px`;
		cell.style.width = `${cellDim}px`;
		container.appendChild(cell);
	}

	cells = document.querySelectorAll('div.cell');
	cells.forEach(cell => {
		cell.addEventListener('mouseover', () => {
			cell.classList.add('black');
		});
	});
}

function clearCells() {
	cells.forEach(cell => {

		// TODO: can I put this if statement into one line
		if (cell.classList.contains('black')) {
			cell.classList.remove('black');
		}
	});
}

let clearButton = document.querySelector('button#clear');
clearButton.addEventListener('click', clearCells);

let dimInput = document.querySelector('#dim');
let newButton = document.querySelector('#new');

newButton.addEventListener('click', () => {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	createCells(parseInt(dimInput.value));
});