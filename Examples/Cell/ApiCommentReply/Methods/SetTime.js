// This example sets the timestamp of the comment reply creation in the current time zone format.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetTime(Date.now());
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTime());
builder.SaveFile("xlsx", "SetTime.xlsx");
builder.CloseFile();