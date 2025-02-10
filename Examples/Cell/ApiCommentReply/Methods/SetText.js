// This example sets the comment reply text.
// How change a reply text.
// Replace a reply text to a new text.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetText("New reply text.");
oWorksheet.GetRange("A3").SetValue("Comment's reply text: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetText());