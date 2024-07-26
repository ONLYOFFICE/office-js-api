// This example sets the bottom margin of the sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetBottomMargin(25.1);
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin  + " mm");
builder.SaveFile("xlsx", "SetBottomMargin.xlsx");
builder.CloseFile();