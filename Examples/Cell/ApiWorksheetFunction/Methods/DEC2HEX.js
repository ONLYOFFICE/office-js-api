// This example shows how to convert a decimal number to hexadecimal. 

// How to get decimal number from hexadecimal.

// Use function to convert a decimal number to hexadecimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2HEX(-100));