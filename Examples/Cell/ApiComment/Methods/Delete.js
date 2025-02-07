// This example deletes the ApiComment object.
// How to remove a comment from a range.
// Get a range add a comment to it and then remove it.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var oComment = oRange.GetComment();
oComment.Delete();
oWorksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");