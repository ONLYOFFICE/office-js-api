// This example shows how to get the left margin of the sheet.
// How to get margin of the sheet's left side.
// Get the size of the left margin of the sheet.
var oWorksheet = Api.GetActiveSheet();
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");