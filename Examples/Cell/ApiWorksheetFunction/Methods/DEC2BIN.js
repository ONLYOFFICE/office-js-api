// Convert a decimal number to binary in a spreadsheet.

// How to get decimal number from binary in a spreadsheet.

// Use function to convert a decimal number to binary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2BIN(-100));