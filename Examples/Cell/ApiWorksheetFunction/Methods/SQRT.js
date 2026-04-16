// Return the square root of a number in a spreadsheet.

// How to calculate the square root of a number in a spreadsheet.

// Use a function to get the square root of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));