const table = document.getElementById('table')

var count = 0
function createRows (rows) {
    for (i = 0; i < rows; i++) {
        let newRow = document.createElement('tr')
        table.appendChild(newRow)
        createCols(5, newRow)
        console.log('oi')
    }
}

function createCols (cols, newRow) {
    for (j = 0; j < cols; j++) {
        count++
        let newCol = document.createElement('td')
        newCol.textContent = count
        newRow.appendChild(newCol)
    }
}

createRows(5)

