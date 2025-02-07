// This example checks if a comment is solved or not.
// How to find out whether a comment is resolved.
// Add a comment resolved status to a range of the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());