// Calculate the natural logarithm of a complex number in a spreadsheet.

// How do I find the natural logarithm of a complex number in a spreadsheet?

// Get the logarithmic result for complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLN("-2+2.5i"));