// This example shows how to get a row number for the selected cell.
// How to get a cell column index.
// Get a range and display its column number.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A9").GetRow();
oWorksheet.GetRange("A2").SetValue(oRange.toString());