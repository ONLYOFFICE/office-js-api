// Get the hyperbolic cosine of a number in a spreadsheet.

// How to find a hyperbolic cosine in a spreadsheet.

// Use function to get the hyperbolic cosine of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COSH(3));