// Generate a unit matrix for a specific size in a spreadsheet.

// Create a unit matrix and place it in a cell in a spreadsheet.

// Insert a matrix of ones and zeros into your spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));