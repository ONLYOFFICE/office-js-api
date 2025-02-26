// This example sets the left margin of the sheet.

// How to set margin of the left side.

// Resize the left margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetLeftMargin(20.8);
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");