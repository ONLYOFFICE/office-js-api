// This example sets the comment text.
// How change a comment text.
// Replace a comment text to a new text.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.SetText("New comment text");