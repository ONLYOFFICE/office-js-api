// This example sets the state of sheet visibility.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");