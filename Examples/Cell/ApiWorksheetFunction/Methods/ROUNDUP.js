// Round a number up to the nearest integer in a spreadsheet.

// How do I round numbers up in a cell in a spreadsheet?

// Increase a number to its higher whole number or specified decimal place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUNDUP(3.456, 0));