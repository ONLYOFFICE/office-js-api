// Subtract two complex numbers in a spreadsheet.

// How do I subtract two complex numbers in a spreadsheet?

// Find the difference between two complex values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUB("1+3i", "-2+2.5i"));