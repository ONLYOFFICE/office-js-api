// The hyperbolic cosecant of an angle in a spreadsheet.

// How to return hyperbolic cosecant in a spreadsheet.

// Use function to get the hyperbolic cosecant of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSCH(0.785398));