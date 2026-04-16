// Convert a decimal number to octal in a spreadsheet.

// How to get decimal number from octal in a spreadsheet.

// Use function to convert a decimal number to octal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2OCT(-100));