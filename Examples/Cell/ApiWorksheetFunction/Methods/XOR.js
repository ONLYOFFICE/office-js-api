// Perform an exclusive OR operation on multiple logical values in a spreadsheet.

// How do I test whether an odd number of conditions are true in a spreadsheet?

// Determine if exactly one or an odd number of values are true in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.TRUE(); //returns TRUE, doesnt require arguments

worksheet.GetRange("A1").SetValue(ans);