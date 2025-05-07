// This example shows how to get the hyperbolic cosine of a number.

// How to find a hyperbolic cosine.

// Use function to get the hyperbolic cosine of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COSH(3));