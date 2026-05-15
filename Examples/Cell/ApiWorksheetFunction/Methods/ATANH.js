// Calculate the inverse hyperbolic tangent of a number in a spreadsheet.

// Compute the inverse hyperbolic tangent of a value in a spreadsheet.

// Recover the original input from its hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));
