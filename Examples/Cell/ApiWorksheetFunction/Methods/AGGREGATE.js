// Summarize numbers while skipping errors and hidden rows in a spreadsheet.

// Use the AGGREGATE function to calculate totals with filtering options in a spreadsheet.

// Get a single result value by choosing which calculation method to apply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));