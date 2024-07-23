// This example specifies that the contents of the cell is displayed with a single horizontal line through the center of the contents.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Struckout text");
oWorksheet.GetRange("A2").SetStrikeout(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "SetStrikeout.xlsx");
builder.CloseFile();