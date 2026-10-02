// Return a logical true value in a spreadsheet.

// How do I insert the logical true value into a cell in a spreadsheet?

// Set a cell to the boolean true value in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.TRUE();
worksheet.GetRange("A1").SetValue(ans);