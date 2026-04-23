// Test whether all conditions are true at the same time in a spreadsheet.

// Use the AND function to verify multiple criteria are met in a spreadsheet.

// Validate that every condition passes together to get a true/false result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);