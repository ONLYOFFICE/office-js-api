// This example sets the left margin of the sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetLeftMargin(20.8);
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
builder.SaveFile("xlsx", "SetLeftMargin.xlsx");
builder.CloseFile();