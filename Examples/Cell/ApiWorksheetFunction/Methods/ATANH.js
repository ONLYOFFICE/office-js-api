// Return the inverse hyperbolic tangent in a spreadsheet.

// How to get return the inverse hyperbolic tangent in a spreadsheet.

// Use function to get an inverse hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));