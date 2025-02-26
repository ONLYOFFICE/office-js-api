// This example sets the vertical alignment of the text in the cell range.

// How to change the vertical alignment of the cell content.

// Change the vertical alignment of the ApiRange content to distributed.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:D5");
oWorksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
oRange.SetAlignVertical("distributed");