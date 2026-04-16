// Return the hyperbolic sine of a number in a spreadsheet.

// How to calaculate the hyperbolic sine of a number in a spreadsheet.

// Use a function to get a hyperbolic sine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));