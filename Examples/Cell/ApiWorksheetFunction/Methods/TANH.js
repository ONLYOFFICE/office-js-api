// This example shows how to return the hyperbolic tangent of a number.

// How to return the hyperbolic tangent of a number.

// Use a function to calculate angle's hyperbolic tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TANH(6));