// Compute the hyperbolic cosine of a value in a spreadsheet.

// What is the hyperbolic cosine result of a number in a spreadsheet?

// Calculate the exponential curve ratio for a given value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COSH(3));