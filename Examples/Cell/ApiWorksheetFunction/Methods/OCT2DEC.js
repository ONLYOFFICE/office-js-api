// Convert an octal number to decimal in a spreadsheet.

// How to get a decimal number from an octal in a spreadsheet.

// Use a function to convert an octal to a decimal number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));