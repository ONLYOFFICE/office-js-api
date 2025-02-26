// This example marks a comment as solved.
// How to resolve a comment.
// Resolve a comment, then show its status in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oComment.SetSolved(true);
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());