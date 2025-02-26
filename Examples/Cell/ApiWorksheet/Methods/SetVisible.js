// This example sets the state of sheet visibility.

// How to set visibility of the sheet.

// Make a sheet visible or not.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");