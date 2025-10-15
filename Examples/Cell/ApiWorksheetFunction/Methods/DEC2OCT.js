// This example shows how to convert a decimal number to octal. 

// How to get decimal number from octal.

// Use function to convert a decimal number to octal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2OCT(-100));