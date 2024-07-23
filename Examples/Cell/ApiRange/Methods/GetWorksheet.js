// This example shows how to get the Worksheet object that represents the worksheet containing the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
var oSheet = oRange.GetWorksheet();
oWorksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
builder.SaveFile("xlsx", "GetWorksheet.xlsx");
builder.CloseFile();