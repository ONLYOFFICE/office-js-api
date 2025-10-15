// This example shows how to get absolute value of a number.

// How to add absolute value to the worksheet.

// Get a function that gets absolute value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ABS(-123.14));