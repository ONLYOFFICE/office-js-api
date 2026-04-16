// Return a random number between the numbers specified in a spreadsheet.

// How to get a number between indicated values in a spreadsheet.

// Use a function to return a random value between specified limits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RANDBETWEEN(-1, 10));