// Round a number down to the nearest integer in a spreadsheet.

// How do I round numbers down while keeping decimals in a spreadsheet?

// Decrease a number to its lower whole number or specified decimal place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUNDDOWN(3.456, 0));