// Find the absolute value of a number in a spreadsheet.

// How do I convert a negative number to positive in a spreadsheet?

// Discard the sign and use only the magnitude of any value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ABS(-123.14));