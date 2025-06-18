// This example shows how to convert a hexadecimal number to decimal.

// How to get a decimal from hexadecimal number.

// Use a function to convert a hexadecimal number to decimal.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));