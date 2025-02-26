// This example shows how to get the right margin of the sheet.

// How to get margin of the sheet's right side.

// Get the size of the right margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
var nRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");