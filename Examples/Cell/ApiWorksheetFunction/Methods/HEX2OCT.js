// This example shows how to convert a hexadecimal number to octal.

// How to get an octal from hexadecimal number.

// Use a function to convert a hexadecimal number to octal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2OCT("FFFFFFFF9C"));