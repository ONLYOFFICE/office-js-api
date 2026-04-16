// Convert a hexadecimal number to binary in a spreadsheet.

// How to get a binary from hexadecimal number in a spreadsheet.

// Use a function to convert a hexadecimal number to binary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2BIN("FFFFFFFF9C"));