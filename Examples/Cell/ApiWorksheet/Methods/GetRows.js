// This example shows how to get the ApiRange object that represents all the cells on the rows range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();