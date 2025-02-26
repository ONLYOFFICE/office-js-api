// This example shows how to get the row height value.

// How to get a cell row height.

// Get a range and display its row height in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var nHeight = oWorksheet.GetRange("A1").GetRowHeight();
oWorksheet.GetRange("A1").SetValue("Height: ");
oWorksheet.GetRange("B1").SetValue(nHeight);