// This example shows how to get the text of the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("text1");
oWorksheet.GetRange("B1").SetValue("text2");
oWorksheet.GetRange("C1").SetValue("text3");
var oRange = oWorksheet.GetRange("A1:C1");
var sText = oRange.GetText();
oWorksheet.GetRange("A3").SetValue("Text from the cell A1: " + sText);
builder.SaveFile("xlsx", "GetText.xlsx");
builder.CloseFile();