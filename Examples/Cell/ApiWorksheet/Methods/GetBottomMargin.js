// This example shows how to get the bottom margin of the sheet.
// How to get margin of the bottom.
// Get the size of the bottom margin of the sheet.
var oWorksheet = Api.GetActiveSheet();
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin + " mm");