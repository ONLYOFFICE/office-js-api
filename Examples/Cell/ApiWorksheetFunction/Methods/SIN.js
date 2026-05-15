// Return the sine of an angle in a spreadsheet.

// Calculate the sine value of an angle using the SIN function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIN(0.5));