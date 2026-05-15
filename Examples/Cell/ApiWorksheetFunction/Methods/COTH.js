// Calculate the hyperbolic cotangent of a number in a spreadsheet.

// What is the hyperbolic cotangent of an angle in a spreadsheet?

// Find the inverse hyperbolic tangent relationship in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COTH(0.785398));