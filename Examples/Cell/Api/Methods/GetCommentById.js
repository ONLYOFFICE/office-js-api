// This example shows how to get a comment from the current document by its ID.
builder.CreateFile("xlsx");
var oComment = Api.AddComment("Comment", "Bob");
var sId = oComment.GetId();
oComment = Api.GetCommentById(sId);
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", oComment.GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", oComment.GetAuthorName());
builder.SaveFile("xlsx", "GetCommentById.xlsx");
builder.CloseFile();