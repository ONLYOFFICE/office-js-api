// Return the hyperbolic secant of an angle in a spreadsheet.

// Get the hyperbolic secant value of an angle using the SECH function.

// Apply the function to calculate and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));