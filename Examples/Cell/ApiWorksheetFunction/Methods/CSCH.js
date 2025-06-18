// This example shows how to the hyperbolic cosecant of an angle.

// How to return hyperbolic cosecant.

// Use function to get the hyperbolic cosecant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CSCH(0.785398));