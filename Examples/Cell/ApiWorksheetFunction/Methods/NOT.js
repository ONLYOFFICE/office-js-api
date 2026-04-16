// Check if the specified logical value is true or false. The function returns true if the argument is false and false if the argument is true in a spreadsheet.

// How to negate a boolean value in a spreadsheet.

// Use a function to get the opposite of the boolean value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let condition = 12 < 100;
let func = Api.WorksheetFunction;
let ans = func.NOT(condition);

worksheet.GetRange("C1").SetValue(ans);