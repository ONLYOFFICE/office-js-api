// Return the logarithm of a number to the specified base in a spreadsheet.

// How to get the logarithm to the specified base in a spreadsheet.

// Use a function to return the logarithm in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));