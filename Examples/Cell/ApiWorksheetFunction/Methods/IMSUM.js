// Add two complex numbers in a spreadsheet.

// How do I add two complex numbers in a spreadsheet?

// Calculate the sum of multiple complex values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));