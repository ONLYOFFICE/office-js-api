// Return the tangent of a complex numbers in a spreadsheet.

// How to get a tangent of a complex numbers in a spreadsheet.

// Use a function to get the tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMTAN("-2+2.5i"));