// Return the number of sheets in a reference in a spreadsheet.

// The SHEETS function counts all sheets in the current workbook.

// Add additional sheets and return their total count.

Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets
let func = Api.WorksheetFunction;
let result = func.SHEETS();
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("C3").SetValue(result);