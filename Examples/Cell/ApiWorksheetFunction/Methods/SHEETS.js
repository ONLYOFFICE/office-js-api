// This example shows how to return the number of sheets in a reference.
// How to count sheets.
// Use a function to get how many sheets are present in the worksheet.
// Add more sheets
Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEETS();
const oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("C3").SetValue(result);
