// This example sets the comment author's name.
// How to add author's name to the comment.
// Add a comment and author name to it, then show author name in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oComment.SetAuthorName("Mark Potato");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());