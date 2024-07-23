// This example sets the top margin of the sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetTopMargin(25.1);
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");
builder.SaveFile("xlsx", "SetTopMargin.xlsx");
builder.CloseFile();