// This example shows how to get the bottom margin of the sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin + " mm");
builder.SaveFile("xlsx", "GetBottomMargin.xlsx");
builder.CloseFile();