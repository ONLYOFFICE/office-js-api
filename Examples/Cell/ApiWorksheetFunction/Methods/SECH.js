// Return the hyperbolic secant of an angle in a spreadsheet.

// How to get angle's hyperbolic secant in a spreadsheet.

// Use a function to calculate the hyperbolic secant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));