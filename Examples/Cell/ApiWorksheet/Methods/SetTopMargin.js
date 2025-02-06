// This example sets the top margin of the sheet.
// How to set margin of the top side.
// Resize the top margin of the sheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetTopMargin(25.1);
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");