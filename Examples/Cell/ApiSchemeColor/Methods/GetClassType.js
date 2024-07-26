// This example gets a class type and inserts it into the document.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
var sClassType = oSchemeColor.GetClassType();
oWorksheet.SetColumnWidth(0, 15);
oWorksheet.SetColumnWidth(1, 10);
oWorksheet.GetRange("A1").SetValue("Class Type = ");
oWorksheet.GetRange("B1").SetValue(sClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();