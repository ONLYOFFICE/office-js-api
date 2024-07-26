// This example shows how to get the user ID of the comment author.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's user Id: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetUserId());
builder.SaveFile("xlsx", "GetUserId.xlsx");
builder.CloseFile();