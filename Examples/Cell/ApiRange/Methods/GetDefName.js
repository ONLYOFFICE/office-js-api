// This example shows how to get the ApiName object of the range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oRange = oWorksheet.GetRange("A1:B1");
var oDefName = oRange.GetDefName();
oWorksheet.GetRange("A3").SetValue("DefName: " + oDefName.GetName());