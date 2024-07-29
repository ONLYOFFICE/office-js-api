// This example shows how to get the range angle.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetOrientation("xlUpward");
var sOrientation = oRange.GetOrientation();
oWorksheet.GetRange("A3").SetValue("Orientation: " + sOrientation);