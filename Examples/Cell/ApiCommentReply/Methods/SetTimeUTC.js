// This example sets the timestamp of the comment reply creation in UTC format.
// How to change a timestamp in UTC when a reply was created.
// Add a reply then update its creation time in UTC format and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.SetTimeUTC(Date.now());
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
oWorksheet.GetRange("B3").SetValue(oReply.GetTimeUTC());