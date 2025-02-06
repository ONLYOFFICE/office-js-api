// This example sets the right margin of the sheet.
// How to set margin of the right side.
// Resize the right margin of the sheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRightMargin(20.8);
var nRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");