const grid = document.getElementById("grid");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clearButton = document.getElementById("clear");
const stepButton = document.getElementById("step");
const colorSelector = document.getElementById("color");

const gridSize = 50;
let isRunning = false;
let intervalId;

// Create cells in the grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.index = i;
        cell.addEventListener("click", toggleCell);
        grid.appendChild(cell);
    }
}

function toggleCell(e) {
    const cell = e.target;
    cell.classList.toggle("alive");
}

// Function accepts an index (a 1D representation of the 2D grid) and calculates the indices of its neighboring cells.
// Each row contains 50 cells, thus index +gridSize is the same position in next row
function getNeighbors(index) {
    const neighbors = [
        index - gridSize - 1, // Top-left neighbor
        index - gridSize, // Top neighbor
        index - gridSize + 1, // Top-right neighbor
        index - 1, // Left neighbor
        index + 1, // Right neighbor
        index + gridSize - 1, // Bottom-left neighbor
        index + gridSize, // Bottom neighbor
        index + gridSize + 1 // Bottom-right neighbor
    ];

    // Filter is used to remove invalid neighbor indices, 0 (inclusive) and gridSize * gridSize (exclusive).
    return neighbors.filter((n) => n >= 0 && n < gridSize * gridSize);
}

// Calculates next generation of the grid
function getNextGeneration() {
    const nextGeneration = Array(gridSize * gridSize).fill(false); //create a new array of dead cells to contain next generation
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = grid.children[i]; //Get the current cell using the index
        const neighbors = getNeighbors(i); //Get the indices of the neighboring cells.
        const aliveNeighbors = neighbors.filter((n) => grid.children[n].classList.contains("alive")).length; //Calculate the number of alive neighbors.

        // Rules: Conway´s game of life
        // If the current cell is alive, it stays alive in the next generation if it has 2 or 3 alive neighbors
        // If the current cell is alive, it dies in the next generation if it has more than 3 alive neighbors
        // If the current cell is dead, it becomes alive in the next generation if it has exactly 3 alive neighbors
        if (cell.classList.contains("alive")) {
            nextGeneration[i] = aliveNeighbors === 2 || aliveNeighbors === 3;
        } else {
            nextGeneration[i] = aliveNeighbors === 3;
        }
    }
    return nextGeneration;
}

// Takes next generation and updates the grid
function updateGrid(nextGeneration) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = grid.children[i];
        if (nextGeneration[i]) {
            cell.classList.add("alive");
        } else {
            cell.classList.remove("alive");
        }
    }
}

function step() {
    const nextGeneration = getNextGeneration();
    updateGrid(nextGeneration);
}

function start() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(step, 100);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);
    }
}

// Clears the grid
function clearGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].classList.remove("alive");
    }
}

// Starting Flyer in center of grid
function createFlyer() {
    const centerIndex = Math.floor(gridSize * gridSize / 2) + Math.floor(gridSize / 2);
    const flyerIndices = [centerIndex - gridSize, centerIndex + 1, centerIndex + gridSize - 1, centerIndex + gridSize, centerIndex + gridSize + 1];
    flyerIndices.forEach((i) => grid.children[i].classList.add("alive"));
}

// Update color change
function updateCellColor() {
    document.documentElement.style.setProperty("--selected-color", colorSelector.value);
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clearGrid);
stepButton.addEventListener("click", step);
colorSelector.addEventListener("change", updateCellColor);

createGrid();
createFlyer();