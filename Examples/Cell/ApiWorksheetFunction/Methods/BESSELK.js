// Return the modified Bessel function Kn(x) in a spreadsheet.

// How to get a result from Bessel function Kn(x) in a spreadsheet.

// Use function to get the Bessel function Kn(x) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELK(1.5, 1));