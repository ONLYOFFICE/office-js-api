// Test whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise in a spreadsheet.

// How to compare two numbers in a spreadsheet.

// Use function to compare two numbers if it returns 1 they are equal else 0 in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));