// This example specifies whether the sheet gridlines must be printed or not.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.GetPrintGridlines());
builder.SaveFile("xlsx", "SetPrintGridlines.xlsx");
builder.CloseFile();