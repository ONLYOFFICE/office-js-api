// Check whether any of the arguments are true. Returns false only if all arguments are false in a spreadsheet.

// How to use OR logical operator in a spreadsheet.

// Use a function to apply OR operation in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(12);

let logical1 = worksheet.GetRange("A1") < 10;
let logical2 = 34 < 10;
let logical3 = 50 < 10;

let func = Api.WorksheetFunction;
let ans = func.OR(logical1, logical2, logical3);
worksheet.GetRange("C1").SetValue(ans);