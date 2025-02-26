// This example shows how to get the comment reply author's name.

// How to get the name of who wrote a reply.

// Get reply author's name and display it in the worksheet. 

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oWorksheet.GetRange("A3").SetValue("Comment's reply author: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetAuthorName());