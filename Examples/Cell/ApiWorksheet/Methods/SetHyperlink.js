// This example adds a hyperlink to the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetHyperlink("A1", "https://api.onlyoffice.com/docbuilder/basic", "Api ONLYOFFICE", "ONLYOFFICE for developers");
builder.SaveFile("xlsx", "SetHyperlink.xlsx");
builder.CloseFile();