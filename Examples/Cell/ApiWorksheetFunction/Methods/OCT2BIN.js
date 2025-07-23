// This example shows how to convert an octal number to binary.

// How to get a binary number form an octal.

// Use a function to convert an octal number to binary.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2BIN(7777777634));