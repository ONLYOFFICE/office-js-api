// This example sets the italic property to the text characters in the cell.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Italicized text");
oWorksheet.GetRange("A2").SetItalic(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
builder.SaveFile("xlsx", "SetItalic.xlsx");
builder.CloseFile();