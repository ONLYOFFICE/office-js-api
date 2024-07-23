// This example sets the page orientation.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPageOrientation("xlPortrait");
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
builder.SaveFile("xlsx", "SetPageOrientation.xlsx");
builder.CloseFile();