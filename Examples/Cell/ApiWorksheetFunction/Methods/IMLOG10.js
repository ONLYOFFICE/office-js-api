// Calculate the base-10 logarithm of a complex number in a spreadsheet.

// How do I find the logarithm with base 10 of a complex number in a spreadsheet?

// Get the base-10 logarithmic result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG10("-2+2.5i"));