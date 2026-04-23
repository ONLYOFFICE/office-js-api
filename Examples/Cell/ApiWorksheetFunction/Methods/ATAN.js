// Calculate the arctangent of a number in a spreadsheet.

// Find an angle in radians from a decimal value in a spreadsheet.

// Determine what angle produces a specific tangent ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN(0.25));
