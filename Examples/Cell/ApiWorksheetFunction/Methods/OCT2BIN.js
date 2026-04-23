// Convert an octal number to its binary representation in a spreadsheet.

// How do I change an octal value to binary in a spreadsheet?

// Transform a base-8 number into a base-2 format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2BIN(7777777634));