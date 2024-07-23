// This example shows how to get the page PrintGridlines property which specifies whether the sheet gridlines must be printed or not.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.GetPrintGridlines());
builder.SaveFile("xlsx", "GetPrintGridlines.xlsx");
builder.CloseFile();