// This example shows how to get a number of the comment replies.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
oWorksheet.GetRange("A3").SetValue("Comment replies count: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetRepliesCount());
builder.SaveFile("xlsx", "GetRepliesCount.xlsx");
builder.CloseFile();