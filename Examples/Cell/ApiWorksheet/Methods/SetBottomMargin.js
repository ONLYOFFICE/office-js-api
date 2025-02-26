// This example sets the bottom margin of the sheet.

// How to set margin of the bottom.

// Resize the bottom margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetBottomMargin(25.1);
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin  + " mm");