// Convert an octal number to hexadecimal in a spreadsheet.

// How to get a hexadecimal number form an octal.

// Use a function to convert an octal number to hexadecimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2HEX(7777777634, 4));