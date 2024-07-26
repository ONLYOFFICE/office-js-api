// This example adds a new name to the worksheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oWorksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
builder.SaveFile("xlsx", "AddDefName.xlsx");
builder.CloseFile();