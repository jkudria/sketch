const defaultGridDim = 16;

// const bgColor = '#FFFFFF';
let sketchColor = '#1199FF';
const rainbowColors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];

let container = document.querySelector("#grid-container");
let containerStyle = window.getComputedStyle(container, null);

// Gives us the dimensions of just the content, not including padding/border/margin. We're assuming a square canvas, so only grabbing height
let containerDim = parseInt(containerStyle.getPropertyValue('height').substring(0, 3));

function randomInt(max) {
    // returns random int from (0, 1, 2, ..., max-1)
    return Math.floor(Math.random() * Math.floor(max));
}

// TODO: limit gridDim to say 128
function createCells(gridDim) {
	let cellDim = containerDim/gridDim;

	for (let i = 0; i < gridDim**2; i++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		cell.style.height = `${cellDim}px`;
		cell.style.width = `${cellDim}px`;
		container.appendChild(cell);
	}

	// TODO: extract all the coloring into a separate function
	// TODO: bug: opacity property stays after switching away to non-darken setting, although it looks cool
	cells = document.querySelectorAll('div.cell');
	cells.forEach(cell => {
		cell.addEventListener('mouseover', () => {
			if (sketchColor.startsWith('#')) {
				cell.style.backgroundColor = sketchColor;
			} else if (sketchColor === 'rainbow') {
				cell.style.backgroundColor = rainbowColors[randomInt(rainbowColors.length)];
			} else if (sketchColor === 'darken') {
				if (!cell.style.backgroundColor) {
					cell.style.backgroundColor = '#000000';
					cell.style.opacity = '0.1';
				} else if (parseFloat(cell.style.opacity) < 1) {
					let currentOpacity = parseFloat(cell.style.opacity);
					cell.style.opacity = `${currentOpacity + 0.1}`;
				}
			}
		});
	});
}

function clearCells() {
	cells.forEach(cell => {
		cell.style.backgroundColor = null;
	});
}

let cells;
createCells(defaultGridDim);

// Clear Button
let clearButton = document.querySelector('button#clear');
clearButton.addEventListener('click', clearCells);

// New Grid
let dimInput = document.querySelector('#dim');
let newButton = document.querySelector('#new');

newButton.addEventListener('click', () => {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	createCells(parseInt(dimInput.value));
});

// Colors
let defaultButton = document.querySelector('#default');
defaultButton.addEventListener('click', () => {
	sketchColor = '#1199FF';
})

let blackButton = document.querySelector('#black');
blackButton.addEventListener('click', () => {
	sketchColor = '#000000';
});

let rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
	sketchColor = 'rainbow';
});

let darkenButton = document.querySelector('#darken');
darkenButton.addEventListener('click', () => {
	sketchColor = 'darken';
});

let colorPicker = document.querySelector('#picker');
colorPicker.addEventListener('input', () => {
	sketchColor = colorPicker.value;
});
colorPicker.addEventListener('change', () => {
	sketchColor = colorPicker.value;
});