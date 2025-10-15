// This example shows how to return the inverse hyperbolic tangent.

// How to get return the inverse hyperbolic tangent.

// Use function to get an inverse hyperbolic tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));