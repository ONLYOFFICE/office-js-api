// This example shows how to get the page orientation.
// How to get orientation of the sheet.
// Get a sheet orientation.
var oWorksheet = Api.GetActiveSheet();
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);