// This example sets the user ID to the comment author.
// How to change a comment author ID.
// Replace a comment author ID to a new one.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment's user Id: ");
oComment.SetUserId("uid-2");
oWorksheet.GetRange("B3").SetValue(oComment.GetUserId());