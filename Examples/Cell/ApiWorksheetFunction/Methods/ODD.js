// This example shows how to round a positive number up and negative number down to the nearest odd integer.

// How to round a number the nearest odd integer.

// Use a function round a negative/positive number the nearest odd integer.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ODD(7.675));