// This example shows how to get the timestamp of the comment creation in the current time zone format.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Timestamp: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetTime());