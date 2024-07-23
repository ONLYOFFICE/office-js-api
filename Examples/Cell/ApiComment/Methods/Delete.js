// This example deletes the ApiComment object.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var oComment = oRange.GetComment();
oComment.Delete();
oWorksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();