// This example shows how to get an array of ApiComment objects.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var aComments = oWorksheet.GetComments();
oWorksheet.GetRange("A4").SetValue("Comment: " + aComments[0].GetText());