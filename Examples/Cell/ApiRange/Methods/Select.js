// This example selects the current range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
oRange.Select();
Api.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "Select.xlsx");
builder.CloseFile();