// Calculate the inverse hyperbolic sine of a number in a spreadsheet.

// Apply the ASINH function for hyperbolic calculations in a spreadsheet.

// Obtain the inverse hyperbolic sine result for mathematical operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));