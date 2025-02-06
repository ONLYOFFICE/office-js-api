// This example shows how to get the top margin of the sheet.
// How to get margin of the sheet's top side.
// Get the size of the top margin of the sheet.
var oWorksheet = Api.GetActiveSheet();
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");