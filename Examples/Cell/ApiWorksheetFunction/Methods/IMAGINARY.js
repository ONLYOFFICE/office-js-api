// Extract the imaginary part of a complex number in a spreadsheet.

// How do I read the imaginary coefficient in a spreadsheet?

// Find the imaginary component of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMAGINARY("-2+2.5i"));