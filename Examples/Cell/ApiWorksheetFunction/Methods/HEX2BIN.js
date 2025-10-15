// This example shows how to convert a hexadecimal number to binary.

// How to get a binary from hexadecimal number.

// Use a function to convert a hexadecimal number to binary.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2BIN("FFFFFFFF9C"));
