// This example shows how to convert a binary number to octal.

// How to get a octal representation of a binary number.

// Use function to convert a binary to octal.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BIN2OCT(1110011100, 4));