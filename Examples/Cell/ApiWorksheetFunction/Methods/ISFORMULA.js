// Detect whether a cell contains a formula in a spreadsheet.

// How do I find out if a cell has a formula in a spreadsheet?

// Use a function to identify cells with formulas versus static values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.WorksheetFunction;
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);