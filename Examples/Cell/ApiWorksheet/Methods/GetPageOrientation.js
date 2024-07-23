// This example shows how to get the page orientation.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
builder.SaveFile("xlsx", "GetPageOrientation.xlsx");
builder.CloseFile();