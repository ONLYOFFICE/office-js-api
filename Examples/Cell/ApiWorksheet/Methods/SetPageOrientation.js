// This example sets the page orientation.

// How to change a page orientation.

// Set a page orientation and display it in the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPageOrientation("xlPortrait");
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);