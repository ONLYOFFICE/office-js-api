// Return the base-10 logarithm of a number in a spreadsheet.

// How to get the logarithm to the base 10 in a spreadsheet.

// Use a function to return the logarithm with the base-10 in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG10(56));