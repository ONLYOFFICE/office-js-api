// Calculate the logarithm of a number using a custom base in a spreadsheet.

// How do I find the logarithm with a base other than 10 or e in a spreadsheet?

// Get the logarithmic value of a number to any specified base in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));