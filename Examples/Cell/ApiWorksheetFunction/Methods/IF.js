// Check whether a condition is met, and return one value if true, and another value if false in a spreadsheet.

// How to check a condition in a spreadsheet.

// Use a function to use IF condition checker in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IF("12<100", 0, 1));