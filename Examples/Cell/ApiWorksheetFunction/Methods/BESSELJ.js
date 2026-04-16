// Return the Bessel function Jn(x) in a spreadsheet.

// How to get a result from Bessel function Jn(x) in a spreadsheet.

// Use function to get the Bessel function Jn(x) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));