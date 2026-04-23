// Calculate the base-2 logarithm of a complex number in a spreadsheet.

// How do I find the logarithm with base 2 of a complex number in a spreadsheet?

// Get the base-2 logarithmic result for complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG2("-2+2.5i"));