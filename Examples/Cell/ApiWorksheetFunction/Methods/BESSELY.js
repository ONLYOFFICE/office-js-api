// Return the modified Bessel function Yn(x) in a spreadsheet.

// How to get a result from Bessel function Yn(x) in a spreadsheet.

// Use function to get the Bessel function Yn(x) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));