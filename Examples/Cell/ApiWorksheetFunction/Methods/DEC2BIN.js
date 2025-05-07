// This example shows how to convert a decimal number to binary. 

// How to get decimal number from binary.

// Use function to convert a decimal number to binary.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DEC2BIN(-100));
