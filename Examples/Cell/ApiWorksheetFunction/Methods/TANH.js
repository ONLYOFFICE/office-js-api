// Return the hyperbolic tangent of a number in a spreadsheet.

// How to return the hyperbolic tangent of a number in a spreadsheet.

// Use a function to calculate angle's hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TANH(6));