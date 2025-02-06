// This example sets the row height value.
// How to set a row height of cells.
// Get a range and specify its row height.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetRowHeight(32);