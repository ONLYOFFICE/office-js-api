// Return the base-2 logarithm of a complex number in a spreadsheet.

// How to get the logarithm of base 2 of a comlex numbers in a spreadsheet.

// Use a function to get the base 2 logarithm in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG2("-2+2.5i"));