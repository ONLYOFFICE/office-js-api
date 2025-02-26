// This example sets the comment reply author's name.

// How to add author's name to the reply.

// Add a reply to the comment and set author name, then show author name in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetAuthorName("Mark Potato");
oWorksheet.GetRange("A3").SetValue("Comment's reply author: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetAuthorName());