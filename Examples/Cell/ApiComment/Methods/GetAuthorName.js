// This example shows how to get the comment author's name.

// How to remove a comment from a range.

// Get a range, add a comment to it and then remove it.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's author: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetAuthorName());