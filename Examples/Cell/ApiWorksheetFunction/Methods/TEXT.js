// Convert a value to text in a specific number format in a spreadsheet.

// How to convert a value to text in a spreadsheet.

// Use a function to convert a value to text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TEXT(45.5, "$0.00"));