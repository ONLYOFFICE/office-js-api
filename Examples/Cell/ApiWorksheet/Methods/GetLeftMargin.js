// This example shows how to get the left margin of the sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
builder.SaveFile("xlsx", "GetLeftMargin.xlsx");
builder.CloseFile();