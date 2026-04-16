// Return the natural logarithm of a number in a spreadsheet.

// How to get the natural logarithm in a spreadsheet.

// Use a function to return a natural logarithm in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LN(23));