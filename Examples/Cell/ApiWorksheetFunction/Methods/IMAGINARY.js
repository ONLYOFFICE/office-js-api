// Return the imaginary coefficient of a complex number in a spreadsheet.

// How to get the imaginary part of the complex number in a spreadsheet.

// Use a function to get an imaginary coefficient of the complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMAGINARY("-2+2.5i"));