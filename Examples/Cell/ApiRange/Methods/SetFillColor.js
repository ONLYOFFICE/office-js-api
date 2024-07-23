// This example sets the background color to the cell range with the previously created color object.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 50);
oWorksheet.GetRange("A2").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oWorksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
oWorksheet.GetRange("A4").SetValue("This is the cell with a default background color");
builder.SaveFile("xlsx", "SetFillColor.xlsx");
builder.CloseFile();