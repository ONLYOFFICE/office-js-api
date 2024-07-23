// This example gets a class type and inserts it into the table.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
var sType = oReply.GetClassType();
oWorksheet.GetRange("A3").SetValue("Type: " + sType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();