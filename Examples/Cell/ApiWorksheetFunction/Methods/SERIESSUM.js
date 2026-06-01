// Return the sum of a power series based on the formula in a spreadsheet.

// Calculate the sum of a power series using the SERIESSUM function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SERIESSUM(5, 2, 1, 3));