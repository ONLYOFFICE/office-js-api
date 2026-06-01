// Calculate the square root of a complex number in a spreadsheet.

// How do I find the square root of a complex number in a spreadsheet?

// Get the square root result for complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSQRT("-2+2.5i"));