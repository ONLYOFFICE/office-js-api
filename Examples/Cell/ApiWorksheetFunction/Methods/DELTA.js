// Check if two numbers are identical in a spreadsheet.

// Are these two values the same or different in a spreadsheet?

// Verify whether your numbers match by returning 1 for equal or 0 for different in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));