// This example shows how to round a number down, toward zero.

// How to round a number down.

// Use a function to round a number towards zero.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUNDDOWN(3.456, 0));