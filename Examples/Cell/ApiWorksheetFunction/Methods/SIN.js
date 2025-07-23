// This example shows how to return the sine of an angle.

// How to calaculate the sine of a number.

// Use a function to get a sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIN(0.5));