// This example freezes first column and get pastes a freezed range address into the table.

// How to get a freeze panes from the worksheet range.

// Return a type from the freeze panes.

builder.CreateFile("xlsx");
Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();