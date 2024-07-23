// This example shows how to get a Range object that represents all the cells in the specified range or a specified cell.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();