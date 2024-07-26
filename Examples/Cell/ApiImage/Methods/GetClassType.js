// This example gets a class type and inserts it into the document.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oImage = oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 2, 3 * 36000);
var sClassType = oImage.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = ");
oWorksheet.GetRange("B1").SetValue(sClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();