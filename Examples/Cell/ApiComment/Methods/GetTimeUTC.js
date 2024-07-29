// This example shows how to get the timestamp of the comment creation in UTC format.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Timestamp UTC: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetTimeUTC());