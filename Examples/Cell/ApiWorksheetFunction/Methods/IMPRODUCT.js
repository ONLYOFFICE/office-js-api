// Calculate the product of multiple complex numbers in a spreadsheet.

// How do I multiply complex numbers together in a spreadsheet?

// Get the multiplication result of complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));