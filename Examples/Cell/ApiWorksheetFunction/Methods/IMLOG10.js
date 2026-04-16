// Return the base-10 logarithm of a complex number in a spreadsheet.

// How to get the logarithm of base 10 of a comlex numbers in a spreadsheet.

// Use a function to get the base 10 logarithm in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG10("-2+2.5i"));