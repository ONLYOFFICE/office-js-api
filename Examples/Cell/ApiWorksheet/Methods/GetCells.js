// This example shows how to get the ApiRange that represents all the cells on the worksheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oCells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();