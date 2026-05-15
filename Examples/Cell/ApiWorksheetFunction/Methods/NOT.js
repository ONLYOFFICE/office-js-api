// Reverse a boolean value in a spreadsheet.

// How do I negate a true or false value in a spreadsheet?

// Get the opposite result of a logical condition in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let condition = 12 < 100;
let func = Api.WorksheetFunction;
let ans = func.NOT(condition);

worksheet.GetRange("C1").SetValue(ans);