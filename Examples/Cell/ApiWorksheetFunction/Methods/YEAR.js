// Extract the year from a date value in a spreadsheet.

// How do I get the year portion of a date in a spreadsheet?

// Retrieve the four-digit year number from any date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEAR("3/16/2018");

worksheet.GetRange("C1").SetValue(ans);