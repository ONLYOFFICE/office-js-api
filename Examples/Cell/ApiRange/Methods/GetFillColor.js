// This example shows how to get the background color for the cell range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 60);
var oRange = oWorksheet.GetRange("A1");
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oRange.SetValue("This is the cell with a color set to its background.");
var oFillColor = oRange.GetFillColor();
oWorksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
oWorksheet.GetRange("A3").SetFillColor(oFillColor);
builder.SaveFile("xlsx", "GetFillColor.xlsx");
builder.CloseFile();