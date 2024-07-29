// This example checks if a comment is solved or not.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment is solved: ");
oWorksheet.GetRange("B3").SetValue(oComment.IsSolved());