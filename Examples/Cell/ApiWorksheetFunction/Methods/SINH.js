// This example shows how to return the hyperbolic sine of a number.

// How to calaculate the hyperbolic sine of a number.

// Use a function to get a hyperbolic sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));