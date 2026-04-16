// Return the result of a number raised to a power in a spreadsheet.

// How to raise a number to a power in a spreadsheet.

// Use a function to calculate the result after raising a number to the power in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.POWER(23, 4));