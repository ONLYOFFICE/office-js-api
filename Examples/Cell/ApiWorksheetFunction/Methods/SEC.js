// This example shows how to return the secant of an angle.

// How to get angle's secant.

// Use a function to calculate the secant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SEC(0.785398));