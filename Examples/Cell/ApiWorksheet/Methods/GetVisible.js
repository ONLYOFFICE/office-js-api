// This example shows how to get the state of sheet visibility.

// How to get visibility of the worksheet.

// Find out whether a sheet is visible or not and display it in the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
var bVisible = oWorksheet.GetVisible();
oWorksheet.GetRange("A1").SetValue("Visible: ");
oWorksheet.GetRange("B1").SetValue(bVisible);