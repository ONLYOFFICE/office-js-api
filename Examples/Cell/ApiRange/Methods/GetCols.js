// This example shows how to get a Range object that represents the columns in the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCols(2).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();