// Return the number of sheets in a reference in a spreadsheet.

// Count all sheets in the current workbook using the SHEETS function.

// Add additional sheets and retrieve their total count in a cell.

Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets
let func = Api.WorksheetFunction;
let result = func.SHEETS();
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("C3").SetValue(result);