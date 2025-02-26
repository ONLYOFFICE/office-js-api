// This example freezes first column then unfreeze all panes in the worksheet.

// How to unfreeze columns from freezed panes.

// Add freezed panes then unfreeze the first column and show all freezed ones' location to prove it.

Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.Unfreeze();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange + "");