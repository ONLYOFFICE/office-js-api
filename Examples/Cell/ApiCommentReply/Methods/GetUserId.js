// This example shows how to get the user ID of the comment reply author.
// How to get a reply author's user ID.
// Add a reply author's ID to a range of the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetUserId());