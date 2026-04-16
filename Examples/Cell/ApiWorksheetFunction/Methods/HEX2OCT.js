// Convert a hexadecimal number to octal in a spreadsheet.

// How to get an octal from hexadecimal number in a spreadsheet.

// Use a function to convert a hexadecimal number to octal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2OCT("FFFFFFFF9C"));