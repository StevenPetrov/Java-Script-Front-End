// function sumTable() {
//     let sum = 0;
//     let total = document.getElementById("sum")
//     const prices = Array.from(document.querySelectorAll('td:nth-child(even)'))
//     for ( p1 of prices) {
//         sum += Number(p1)
//     }
//     total.value = sum
// }

function sumTable() {
    // Get the first table in the document
    const table = document.getElementsByTagName("table")[0];
    
    // Get all the rows in the table except the last one
    const rows = table.getElementsByTagName("tr");
    const numRows = rows.length - 1;
    
    // Initialize a variable to hold the sum
    let sum = 0;
    
    // Iterate over each row, skipping the first one (header) and last one (total)
    for (let i = 1; i < numRows; i++) {
      // Get the last cell in the row, which contains the cost
      const costCell = rows[i].cells[1];
      
      // Parse the cost as a float and add it to the sum
      sum += parseFloat(costCell.textContent);
    }
    
    // Display the sum in the element with ID "sum"
    const sumElement = document.getElementById("sum");
    sumElement.textContent = sum.toFixed(2);
  }