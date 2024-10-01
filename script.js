function addRow(matrixId) {
    const matrix = document.getElementById(matrixId);
    const newRow = matrix.insertRow();
    const cols = matrix.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
        const newCell = newRow.insertCell(i);
        newCell.innerHTML = '<input type="number" placeholder="0">';
    }
}

function addColumn(matrixId) {
    const matrix = document.getElementById(matrixId);
    for (let i = 0; i < matrix.rows.length; i++) {
        const newCell = matrix.rows[i].insertCell(-1);
        newCell.innerHTML = '<input type="number" placeholder="0">';
    }
}

function calculateSum() {
    const matrixA = getMatrixValues('matrixA');
    const matrixB = getMatrixValues('matrixB');

    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        alert("Matrices must have the same dimensions!");
        return;
    }

    const result = matrixA.map((row, i) => 
        row.map((value, j) => value + matrixB[i][j])
    );

    displayResult(result);
}

function getMatrixValues(matrixId) {
    const matrix = document.getElementById(matrixId);
    return Array.from(matrix.rows).map(row => 
        Array.from(row.cells).map(cell => parseFloat(cell.firstChild.value) || 0)
    );
}

function displayResult(result) {
    const resultDiv = document.getElementById('resultMatrix');
    resultDiv.innerHTML = ''; // Clear previous result

    const resultTable = document.createElement('table');
    result.forEach(row => {
        const newRow = resultTable.insertRow();
        row.forEach(value => {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        });
    });
    
    resultDiv.appendChild(resultTable);
}
