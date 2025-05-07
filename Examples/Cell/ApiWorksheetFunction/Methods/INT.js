// This example shows how to round a number down to the nearest integer.

// How to round a number down to the nearest integer.

// Use a function to round down a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.INT(2.3));