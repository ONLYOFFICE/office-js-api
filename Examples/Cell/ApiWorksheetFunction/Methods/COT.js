// Get the cotangent of a number in a spreadsheet.

// How to find a cotangent in a spreadsheet.

// Use function to get the cotangent of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COT(0.785398));