// This example shows how to return the tangent of an angle.

// How to return a tangent of an angle.

// Use a function to calculate angle's tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));