// Return the tangent of an angle in a spreadsheet.

// How to return a tangent of an angle in a spreadsheet.

// Use a function to calculate angle's tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));