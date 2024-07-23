// This example sets the comment text.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.SetText("New comment text");
builder.SaveFile("xlsx", "SetText.xlsx");
builder.CloseFile();