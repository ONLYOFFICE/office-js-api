// This example shows how to get a type of the ApiName class.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
oWorksheet.GetRange("A3").SetValue("Name: " + oDefName.GetName());
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();