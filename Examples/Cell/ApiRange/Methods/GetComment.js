// This example shows how to get the ApiComment object of the range.
// How to get a range comment.
// Get a range get its comment and show its text in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment: " + oRange.GetComment().GetText());