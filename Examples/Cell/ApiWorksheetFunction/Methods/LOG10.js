// Calculate the base-10 logarithm of a number in a spreadsheet.

// How do I find the logarithm with base 10 in a spreadsheet?

// Get the common logarithm value of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG10(56));