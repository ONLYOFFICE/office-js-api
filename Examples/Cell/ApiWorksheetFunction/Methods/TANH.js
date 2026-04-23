// Return the hyperbolic tangent of a number in a spreadsheet.

// Calculate the hyperbolic tangent of a number using the TANH function.

// Returns the hyperbolic tangent value of the specified number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TANH(6));