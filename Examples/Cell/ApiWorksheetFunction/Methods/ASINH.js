// Return the inverse hyperbolic sine of a number in a spreadsheet.

// How to get an inverse hyperbolic sine in a spreadsheet.

// Use function to get an inverse hyperbolic sine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));