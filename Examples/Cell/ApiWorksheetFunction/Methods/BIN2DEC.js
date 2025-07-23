// This example shows how to convert a binary number to decimal.

// How to get a decimal representation of a binary number.

// Use function to convert a binary to decimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2DEC(1110011100));