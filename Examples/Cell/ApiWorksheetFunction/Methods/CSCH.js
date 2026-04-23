// Calculate the hyperbolic cosecant for an angle in a spreadsheet.

// What is the hyperbolic cosecant value in a spreadsheet?

// Determine the inverse hyperbolic sine ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSCH(0.785398));