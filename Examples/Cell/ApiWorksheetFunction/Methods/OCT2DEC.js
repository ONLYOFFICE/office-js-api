// This example shows how to convert an octal number to decimal.

// How to get a decimal number from an octal.

// Use a function to convert an octal to a decimal number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));