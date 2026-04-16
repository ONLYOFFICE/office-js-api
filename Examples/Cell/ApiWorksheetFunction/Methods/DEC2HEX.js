// Convert a decimal number to hexadecimal in a spreadsheet.

// How to get decimal number from hexadecimal in a spreadsheet.

// Use function to convert a decimal number to hexadecimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2HEX(-100));