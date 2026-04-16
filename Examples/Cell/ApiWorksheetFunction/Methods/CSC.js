// Get the cosecant of an angle in a spreadsheet.

// How to return cosecant in a spreadsheet.

// Use function to get the cosecant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));