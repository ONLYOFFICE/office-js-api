// This example shows how to get a sheet name.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Name: ");
oWorksheet.GetRange("B1").SetValue(sName);
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();