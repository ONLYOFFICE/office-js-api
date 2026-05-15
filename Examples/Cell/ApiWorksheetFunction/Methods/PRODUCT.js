// Multiply a set of numbers in a spreadsheet.

// What is the product of multiple numbers in a spreadsheet?

// Calculate the result of multiplying a series of values together in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRODUCT(65, 34, 165, 6, 9, 54));