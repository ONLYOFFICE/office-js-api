// This example freezes first column then unfreeze all panes in the worksheet.

// How to unfreeze columns from freezed panes.

// Add freezed panes then unfreeze the first column and show all freezed ones' location to prove it.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");