// Return the unit matrix for the specified dimension in a spreadsheet.

// How to get an unit matrix in a spreadsheet.

// Use a function to get an unit matrix specifying dimension in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));