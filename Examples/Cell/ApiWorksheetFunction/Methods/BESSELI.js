// Return the modified Bessel function In(x) in a spreadsheet.

// How to get a resutl from Bessel function In(x) in a spreadsheet.

// Use function to get the modified Bessel function In(x) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELI(3.5, 1));