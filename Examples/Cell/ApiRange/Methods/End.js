// This example shows how to get a Range object that represents the end in the specified direction in the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("C4:D5");
oRange.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "End.xlsx");
builder.CloseFile();