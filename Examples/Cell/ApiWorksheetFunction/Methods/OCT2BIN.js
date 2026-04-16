// Convert an octal number to binary in a spreadsheet.

// How to get a binary number form an octal.

// Use a function to convert an octal number to binary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2BIN(7777777634));