// Return the sine of an angle in a spreadsheet.

// How to calaculate the sine of a number in a spreadsheet.

// Use a function to get a sine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIN(0.5));