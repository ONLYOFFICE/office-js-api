// Calculate the inverse hyperbolic cotangent of a number in a spreadsheet.

// Compute the ACOTH value for mathematical analysis in a spreadsheet.

// Output the inverse hyperbolic cotangent to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOTH(3));