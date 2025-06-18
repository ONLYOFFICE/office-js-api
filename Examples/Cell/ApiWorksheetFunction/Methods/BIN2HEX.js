// This example shows how to convert a binary number to hexadecimal.

// How to get a hexadecimal representation of a binary number.

// Use function to convert a binary to hexadecimal.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BIN2HEX(1110011100, 4));