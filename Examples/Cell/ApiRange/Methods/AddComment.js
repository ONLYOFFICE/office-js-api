// This example adds a comment to the range.

// How to comment a range.

// Get a range from the worksheet, add a comment to it and then show the comments text.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
oWorksheet.GetRange("A4").SetValue("Comment: " + oRange.GetComment().GetText());