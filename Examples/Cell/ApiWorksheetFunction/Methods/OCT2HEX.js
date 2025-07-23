// This example shows how to convert an octal number to hexadecimal.

// How to get a hexadecimal number form an octal.

// Use a function to convert an octal number to hexadecimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2HEX(7777777634, 4));