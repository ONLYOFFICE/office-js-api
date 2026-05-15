// Return the hyperbolic sine of a number in a spreadsheet.

// Calculate the hyperbolic sine value using the SINH function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));