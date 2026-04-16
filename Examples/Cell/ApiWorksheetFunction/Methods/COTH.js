// Get the hyperbolic cotangent of a number in a spreadsheet.

// How to find a hyperbolic cotangent in a spreadsheet.

// Use function to get the hyperbolic cotangent of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COTH(0.785398));