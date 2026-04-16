// Convert real and imaginary coefficients into a complex number in a spreadsheet.

// How to create a complex number using coefficients in a spreadsheet.

// Use function to convert real and imaginary coefficients into a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMPLEX(-2, 2.5, "i"));