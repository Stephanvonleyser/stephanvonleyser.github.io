const grid = document.getElementById("grid");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clearButton = document.getElementById("clear");
const stepButton = document.getElementById("step");
const colorSelector = document.getElementById("color");

const gridSize = 50;
let isRunning = false;
let intervalId;

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

function getNeighbors(index) {
    const neighbors = [
        index - gridSize - 1,
        index - gridSize,
        index - gridSize + 1,
        index - 1,
        index + 1,
        index + gridSize - 1,
        index + gridSize,
        index + gridSize + 1
    ];
    return neighbors.filter((n) => n >= 0 && n < gridSize * gridSize);
}

function getNextGeneration() {
    const nextGeneration = Array(gridSize * gridSize).fill(false);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = grid.children[i];
        const neighbors = getNeighbors(i);
        const aliveNeighbors = neighbors.filter((n) => grid.children[n].classList.contains("alive")).length;

        if (cell.classList.contains("alive")) {
            nextGeneration[i] = aliveNeighbors === 2 || aliveNeighbors === 3;
        } else {
            nextGeneration[i] = aliveNeighbors === 3;
        }
    }
    return nextGeneration;
}

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

function clearGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].classList.remove("alive");
    }
}

function createFlyer() {
    const centerIndex = Math.floor(gridSize * gridSize / 2) + Math.floor(gridSize / 2);
    const flyerIndices = [centerIndex - gridSize, centerIndex + 1, centerIndex + gridSize - 1, centerIndex + gridSize, centerIndex + gridSize + 1];
    flyerIndices.forEach((i) => grid.children[i].classList.add("alive"));
}

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