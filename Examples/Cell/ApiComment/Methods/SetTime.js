// This example sets the timestamp of the comment creation in the current time zone format.
// How to change a time when a comment was created.
// Add a comment then update its creation time and show it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Timestamp: ");
oComment.SetTime(Date.now());
oWorksheet.GetRange("B3").SetValue(oComment.GetTime());