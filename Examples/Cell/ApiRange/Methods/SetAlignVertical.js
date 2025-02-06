// This example sets the vertical alignment of the text in the cell range.
// How to change cell content alignment.
// Change alignment of a content to vertical.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:D5");
oWorksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
oRange.SetAlignVertical("distributed");