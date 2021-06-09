const grid = document.querySelector()
const startButton = document.getElementById()
const score = document.getElementById()
let squares = []

function createGrid() {
    for (let i = 0; i<100; i++){
        const square = document.createElement('div')
        square.classList('square')
        grid.appendChild(square)
    }
}
createGrid()