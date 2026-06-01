// Return the tangent of an angle in a spreadsheet.

// Calculate the tangent of an angle using the TAN function.

// Returns the tangent value of the specified angle in radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));