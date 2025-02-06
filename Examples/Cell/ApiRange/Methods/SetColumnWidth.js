// This example sets the width of all the columns in the range.
// How to make a cell column wider.
// Get a range and set its column width.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetColumnWidth(20);