// This example sets the font size to the characters of the cell range.
// How to resize a cell font size.
// Get a range and set its font size.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontSize(20);