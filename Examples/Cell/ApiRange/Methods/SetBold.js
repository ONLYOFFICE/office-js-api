// This example sets the bold property to the text characters in the current cell or cell range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Bold text");
oWorksheet.GetRange("A2").SetBold(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "SetBold.xlsx");
builder.CloseFile();