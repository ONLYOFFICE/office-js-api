// This example shows how to get the hyperbolic cotangent of a number.

// How to find a hyperbolic cotangent.

// Use function to get the hyperbolic cotangent of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COTH(0.785398));