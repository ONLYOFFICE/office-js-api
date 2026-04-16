// Return the product of the specified complex numbers in a spreadsheet.

// How to get the result from multiplication of a complex number in a spreadsheet.

// Use a function to get the result from the product in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));