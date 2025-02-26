// This example shows how to get a comment from the current document by its ID.

// How to get specific comment by its ID.

// Find a comment by its ID.

var oComment = Api.AddComment("Comment", "Bob");
var sId = oComment.GetId();
oComment = Api.GetCommentById(sId);
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", oComment.GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", oComment.GetAuthorName());