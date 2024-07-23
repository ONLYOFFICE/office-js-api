// This example shows how to get a collection of the ranges.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var nCount = oAreas.GetCount();
oRange = oWorksheet.GetRange("A5");
oRange.SetValue("The number of ranges in the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange("B5").SetValue(nCount);
builder.SaveFile("xlsx", "GetAreas.xlsx");
builder.CloseFile();