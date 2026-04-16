// Return a bitwise "OR" of two numbers in a spreadsheet.

// How to get a result from OR operation in a spreadsheet.

// Use function to calculate bitwise "OR" operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITOR(23, 10));