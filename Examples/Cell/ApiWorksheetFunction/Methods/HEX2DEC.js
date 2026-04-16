// Convert a hexadecimal number to decimal in a spreadsheet.

// How to get a decimal from hexadecimal number in a spreadsheet.

// Use a function to convert a hexadecimal number to decimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));