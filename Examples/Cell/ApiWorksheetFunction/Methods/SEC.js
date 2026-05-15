// Return the secant of an angle in a spreadsheet.

// Get the secant value of an angle using the SEC function.

// Apply the function to calculate and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEC(0.785398));