// Return the secant of an angle in a spreadsheet.

// How to get angle's secant in a spreadsheet.

// Use a function to calculate the secant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEC(0.785398));