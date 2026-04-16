// Return the arctangent of a number in a spreadsheet.

// How to get an arctangent of a number in a spreadsheet.

// Use function to get an arctangent of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN(0.25));