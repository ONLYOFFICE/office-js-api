// This example shows how to get a sheet index.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nIndex = oWorksheet.GetIndex();
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(nIndex);
builder.SaveFile("xlsx", "GetIndex.xlsx");
builder.CloseFile();