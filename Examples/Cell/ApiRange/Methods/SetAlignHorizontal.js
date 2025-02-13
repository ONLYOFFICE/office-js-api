// This example sets the horizontal alignment of the text in the cell range.
// How to change cell content alignment.
// Change alignment of a content to horizontal.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetAlignHorizontal("center");