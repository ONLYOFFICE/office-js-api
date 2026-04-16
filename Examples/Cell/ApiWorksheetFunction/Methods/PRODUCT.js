// Multiply all the numbers given as arguments in a spreadsheet.

// How to return the result after multiplication in a spreadsheet.

// Use a function to multiply a list of numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRODUCT(65, 34, 165, 6, 9, 54));