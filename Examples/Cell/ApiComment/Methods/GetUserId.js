// This example shows how to get the user ID of the comment author.
// How to get a comment author's user ID.
// Add a comment author's ID to a range of the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's user Id: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetUserId());