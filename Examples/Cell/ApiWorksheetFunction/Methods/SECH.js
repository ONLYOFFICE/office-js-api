// This example shows how to return the hyperbolic secant of an angle.

// How to get angle's hyperbolic secant.

// Use a function to calculate the hyperbolic secant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));