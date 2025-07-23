// This example shows how to return the inverse hyperbolic sine of a number.

// How to get an inverse hyperbolic sine.

// Use function to get an inverse hyperbolic sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));