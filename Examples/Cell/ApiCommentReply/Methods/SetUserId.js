// This example sets the user ID to the comment reply author.
// How to change a reply author ID.
// Replace a reply author ID to a new one.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetUserId("uid-2");
oWorksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetUserId());