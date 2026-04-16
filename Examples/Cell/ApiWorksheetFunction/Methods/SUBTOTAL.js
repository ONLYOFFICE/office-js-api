// Return a subtotal in a list or database in a spreadsheet.

// How to calculate a subtotal in a spreadsheet.

// Use a function to estimate a subtotal from the list in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBTOTAL(9, 10, 30, 50, 5));