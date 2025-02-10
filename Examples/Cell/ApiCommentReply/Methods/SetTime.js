// This example sets the timestamp of the comment reply creation in the current time zone format.
// How to change a time when a reply was created.
// Add a reply then update its creation time and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetTime(Date.now());
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTime());