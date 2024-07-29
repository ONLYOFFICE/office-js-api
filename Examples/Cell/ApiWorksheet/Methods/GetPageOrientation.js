// This example shows how to get the page orientation.
var oWorksheet = Api.GetActiveSheet();
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);