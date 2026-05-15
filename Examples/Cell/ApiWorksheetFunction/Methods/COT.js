// Calculate the cotangent of an angle in a spreadsheet.

// What is the reciprocal tangent value in a spreadsheet?

// Find the inverted tangent ratio for a given angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COT(0.785398));